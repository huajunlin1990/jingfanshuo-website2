import { useState, useCallback } from 'react';

type Validator<T> = (value: T) => string | null;

interface UseFormOptions<T> {
  initialValues: T;
  validationRules?: { [key: string]: Validator<any>[] };
  onSubmit?: (values: T) => void | Promise<void>;
}

export function useForm<T extends Record<string, any>>(options: UseFormOptions<T>) {
  const { initialValues, validationRules = {}, onSubmit } = options;
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback(
    (name: string, value: any): string | null => {
      const rules = validationRules[name];
      if (!rules) return null;

      for (const rule of rules) {
        const error = rule(value);
        if (error) return error;
      }

      return null;
    },
    [validationRules]
  );

  const validateAll = useCallback((): boolean => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    for (const name in validationRules) {
      const error = validateField(name, values[name]);
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  }, [validationRules, validateField, values]);

  const handleChange = useCallback(
    (name: string, value: any) => {
      setValues((prev) => ({ ...prev, [name]: value }));
      if (touched[name]) {
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [touched, validateField]
  );

  const handleBlur = useCallback(
    (name: string) => {
      if (!touched[name]) {
        setTouched((prev) => ({ ...prev, [name]: true }));
        const error = validateField(name, values[name]);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [touched, validateField, values]
  );

  const handleSubmit = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      
      const allTouched: { [key: string]: boolean } = {};
      for (const key in initialValues) {
        allTouched[key] = true;
      }
      setTouched(allTouched);

      const isValid = validateAll();
      if (!isValid) return;

      try {
        setIsSubmitting(true);
        await onSubmit?.(values);
      } finally {
        setIsSubmitting(false);
      }
    },
    [validateAll, values, onSubmit, initialValues]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  const getFieldProps = useCallback(
    (name: string) => ({
      value: values[name],
      onChange: (value: any) => handleChange(name, value),
      onBlur: () => handleBlur(name),
      error: touched[name] ? errors[name] : null,
    }),
    [values, touched, errors, handleChange, handleBlur]
  );

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid: Object.keys(errors).length === 0,
    handleChange,
    handleBlur,
    handleSubmit,
    getFieldProps,
    setErrors,
    reset,
  };
}

// 常用验证规则
export const validators = {
  required: (message = '此项为必填项'): Validator<string> => (value) => {
    if (!value || value.trim() === '') return message;
    return null;
  },

  minLength: (min: number, message?: string): Validator<string> => (value) => {
    if (value && value.length < min) {
      return message || `至少需要 ${min} 个字符`;
    }
    return null;
  },

  maxLength: (max: number, message?: string): Validator<string> => (value) => {
    if (value && value.length > max) {
      return message || `最多 ${max} 个字符`;
    }
    return null;
  },

  email: (message = '请输入有效的邮箱地址'): Validator<string> => (value) => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return message;
    }
    return null;
  },

  phone: (message = '请输入有效的手机号码'): Validator<string> => (value) => {
    if (value && !/^1[3-9]\d{9}$/.test(value)) {
      return message;
    }
    return null;
  },

  pattern: (regex: RegExp, message = '格式不正确'): Validator<string> => (value) => {
    if (value && !regex.test(value)) {
      return message;
    }
    return null;
  },
};
