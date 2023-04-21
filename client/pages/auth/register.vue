<script lang="ts" setup>
import { Form, Field } from 'vee-validate';
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

const validationSchema = toTypedSchema(
  z.object({
    email: z.string().email().default('angelhdz@gmail.com'),
    password: z
      .string()
      .min(6, { message: 'Must be 6 or more characters long' })
      .default('123456'),
    name: z.string(),
  }),
);

const auth = useAuthStore();

function handleSubmit(values) {
  const { email, password, name } = values;
  auth.register({ email, password, name });
}
</script>

<template>
  <main class="column items-center q-mt-md q-gutter-y-sm">
    <span class="text-h4">Register</span>
    <Form
      class="column"
      :validation-schema="validationSchema"
      @submit="handleSubmit"
    >
      <Field
        name="name"
        type="name"
        v-slot="{ errorMessage, value, field, handleReset }"
      >
        <QInput
          filled
          :model-value="value"
          v-bind="field"
          :error-message="errorMessage"
          :error="!!errorMessage"
          label="Name"
        />
      </Field>
      <Field
        name="email"
        type="email"
        v-slot="{ errorMessage, value, field, handleReset }"
      >
        <QInput
          filled
          :model-value="value"
          v-bind="field"
          :error-message="errorMessage"
          :error="!!errorMessage"
          label="Email"
        />
      </Field>
      <Field
        name="password"
        type="password"
        v-slot="{ errorMessage, value, field }"
      >
        <QInput
          filled
          :model-value="value"
          v-bind="field"
          :error-message="errorMessage"
          :error="!!errorMessage"
          label="Password"
          type="password"
        />
      </Field>
      <QBtn type="submit" label="register" color="purple" />
    </Form>

    <div class="column q-gutter-y-sm q-mt-md">
      <span>Already registered?</span>
      <QBtn to="/auth/login" label="login" color="primary" />
    </div>
  </main>
</template>
