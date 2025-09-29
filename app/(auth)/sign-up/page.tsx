'use client'
import {CountrySelectField} from '@/components/formes/CountrySelectField';
import FooterLinks from '@/components/formes/FooterLinks';
import InputField from '@/components/formes/InputField';
import SelectField from '@/components/formes/selectField';
import { Button } from '@/components/ui/button';
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants';
import { Loader2 } from 'lucide-react';
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      country: 'US',
      investmentGoals: 'Growth',
      riskTolerance: 'Medium',
      preferredIndustry: 'Technology',
    }, mode: 'onBlur'});

  const onSubmit = async(data: SignUpFormData) => {
    try {
      console.log(data) 
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1 className='form-title'>Sign Up & Personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <InputField
          name='fullName'
          label='Full Name'
          placeholder='John Doe'
          type='text'
          register={register}
          error={errors.fullName}
          validation={{
            required: 'Full name is required',
            minLength: {
              value: 2,
              message: 'Full name must be at least 3 characters long',
            },
            maxLength: {
              value: 100,
              message: 'Full name must be at most 100 characters long',
            },
          }}
        />
        <InputField
          name='email'
          label='Email'
          placeholder='john@example.com'
          type='email'
          register={register}
          error={errors.email}
          validation={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          }}
        />
        <InputField
          name='password'
          label='Password'
          placeholder='8 digit password'
          type='password'
          register={register}
          error={errors.password}
          validation={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
            maxLength: {
              value: 100,
              message: 'Password must be at most 100 characters long',
            },
          }}
        />
        <CountrySelectField
          name='country'
          label='Country'
          control={control}
          error={errors.country}
          required
        />
        <SelectField
          name='investmentGoals'
          label='Investment Goals'
          placeholder='Select your investment goals'
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />
        <SelectField
          name='riskTolerance'
          label='Risk Tolerance'
          placeholder='Select your risk tolerance'
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />
        <SelectField
          name='preferredIndustry'
          label='Preferred Industry'
          placeholder='Select your preferred industry'
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />
        <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
          {isSubmitting ? (
            <>
              Creating account...
              <Loader2 className='ml-2 h-4 w-4 animate-spin' />
            </>
          ) : (
            <>Start your investing journey</>
          )}
        </Button>
        <FooterLinks text='Already have an account? ' href='/sign-in' linkText='Sign In' />
      </form>
    </>
  )
}

export default SignUp