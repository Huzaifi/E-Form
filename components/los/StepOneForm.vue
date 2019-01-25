<template>
  <v-form ref="form1" v-model="form1Valid" lazy-validation>
    <v-card class="transparent elevation-0">
      <v-card-text>
        <v-text-field
          v-model="item.nik"
          :rules="rules.nik"
          mask="####-####-####-####"
          :counter="16"
          label="No. E-KTP"
          required
          hint="Silahkan Masukan No. EKTP yang terdaftar."
          persistent-hint
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn to="/" color="warning">cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn 
          @click="validateForm1" 
          color="secondary"
          :loading="dialog"
          :disabled="dialog || !form1Valid"
        >
          validate
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>
