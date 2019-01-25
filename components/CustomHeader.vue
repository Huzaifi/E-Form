<template>
  <section>
    <v-navigation-drawer
      v-model="drawer"
      app
      :fixed="navigationFixed"
      :clipped="navigationClipped"
      :floating="navigationFloating"
      :right="navigationRight"
      :left="navigationLeft"
      :width="navigationWidth"
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title style="font-size:1.5rem"><strong>Sitemap</strong></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- <v-list-tile to="registrationForm">
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Buka Tabungan Baru</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="LoanForm">
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Pengajuan Pinjaman</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->
        <v-list-tile to="formPenambahanJenisTabungan">
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Tambah Jenis Tabungan</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="formPerubahanDataTabungan">
          <v-list-tile-action>
            <v-icon>edit</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Rubah Data Tabungan</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="formPerubahanDataLoan">
          <v-list-tile-action>
            <v-icon>edit</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Rubah Data Pinjaman</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- <v-list-group
          prepend-icon="account_circle"
          :value="accountDropdown"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Jenis Tabungan</v-list-tile-title>
          </v-list-tile>

          <v-list-tile to="tabunganKu">
            <v-list-tile-content>
              <v-list-tile-title>- TabunganKu</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="registrationInfo">
            <v-list-tile-content>
              <v-list-tile-title>- Tandamata</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="tandaMataBerjangka">
            <v-list-tile-content>
              <v-list-tile-title>- bjb Tandamata Berjangka</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="tandaMataBisnis">
            <v-list-tile-content>
              <v-list-tile-title>- bjb Tandamata Bisnis</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="tandaMataGold">
            <v-list-tile-content>
              <v-list-tile-title>- bjb Tandamata Gold</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="tandaMataPurnabakti">
            <v-list-tile-content>
              <v-list-tile-title>- bjb Tandamata Purnabakti</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="tandaMataMyFirst">
            <v-list-tile-content>
              <v-list-tile-title>- bjb Tandamata My First</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="simpeda">
            <v-list-tile-content>
              <v-list-tile-title>- Simpeda</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list-group>

        <v-list-group
          prepend-icon="money"
          :value="accountDropdown"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Jenis Kredit bjb</v-list-tile-title>
          </v-list-tile>

          <v-list-tile to="kreditGunaBakti">
            <v-list-tile-content>
              <v-list-tile-title>- bjb Kredit Guna Bhakti</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="loanInfo">
            <v-list-tile-content>
              <v-list-tile-title>- bjb KPR</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="kreditPraPurnaBhakti">
            <v-list-tile-content>
              <v-list-tile-title>- bjb Kredit Pra Purna Bhakti (KPPB)</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="kreditPurnaBhakti">
            <v-list-tile-content>
              <v-list-tile-title>- bjb Kredit Purna Bhakti (KPB)</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="backToBackLoan">
            <v-list-tile-content>
              <v-list-tile-title>- bjb Back to Back Loan</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group> -->

      </v-list>

    </v-navigation-drawer>

    <v-toolbar 
      app
      :light="toolbarLight"
      :color="toolbarColor" 
      :fixed="toolbarFixed"  
      :prominent="toolbarProminent" 
      :inverted-scroll="toolbarInvertedScroll" 
      :scroll-off-screen="toolbarScrollOfScreen" 
      :scroll-threshold="toolbarScrollThreshold" 
      :height="toolbarHeight" 
    >
      <v-spacer></v-spacer>
      <a class="d-flex" href="/">
        <img src="/static/logo_bank_bjb.png" alt="Vuetify.js" height="75">
      </a>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
  </section>
</template>

<script>
export default {
  name: "custom-header",
  props: {
    toolbarColor: String,
    toolbarHeight: Number,
    toolbarScrollOfScreen: Boolean,
    toolbarScrollThreshold: Number,
    toolbarInvertedScroll: Boolean,
    toolbarProminent: Boolean,
    toolbarFixed: Boolean,
    toolbarLight: Boolean,
    navigationFixed: Boolean,
    navigationClipped: Boolean,
    navigationFloating: Boolean,
    navigationRight: Boolean,
    navigationLeft: Boolean,
    navigationWidth: Number
  },
  data: () => ({
    drawer: false,
    accountDropdown: false
  })
};
</script>
