<template>
  <section>
    <!-- HEADER -->
    <custom-header
      :toolbar-light="true"
      :toolbar-color="'white'"
      :toolbar-fixed="false"
      :toolbar-prominent="false"
      :toolbar-inverted-scroll="false"
      :toolbar-scroll-off-screen="false"
      :toolbar-height="90"
      :navigation-fixed="true"
      :navigation-clipped="true"
      :navigation-floating="true"
      :navigation-right="true"
      :navigation-width="250"
    ></custom-header>

    <!-- CONTENT -->
    <back-to-back-loan></back-to-back-loan>
    
  </section>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    agree: false,
    drawer: false
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$router.push({
          path: `/loanForm/${this.$route.params.id}`
        });
      }
    }
  }
};
</script>

