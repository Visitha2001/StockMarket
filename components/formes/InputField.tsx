import React from 'react'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

const InputField = ({label, name, placeholder, type = 'text', register, error, validation, disabled, value}: 
    FormInputProps    
) => {
  return (
    <div className='space-y-2'>
        <label htmlFor={name} className='label'>
            {label}
        </label>
        <Input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            className={cn('form-input' , {'opacity-50 cursor-not-allowed': disabled})}
            {...register(name, validation)}
        />
        {error && <p className='text-red-500 text-sm mt-2'>{error.message}</p>}
    </div>
  )
}

export default InputField