<template>
  <section>
    <custom-header
      :toolbar-light="true"
      :toolbar-color="'white'"
      :toolbar-fixed="true"
      :toolbar-prominent="true"
      :toolbar-inverted-scroll="true"
      :toolbar-scroll-off-screen="true"
      :toolbar-scroll-threshold="100"
      :toolbar-height="90"
      :navigation-fixed="true"
      :navigation-clipped="true"
      :navigation-floating="true"
      :navigation-right="true"
      :navigation-width="250"
    ></custom-header>

    <v-parallax dark :height="windowHeight" src="/static/bg-2.png">
      <v-layout align-center justify-center column>
        <!-- Corporate Logo -->
        <v-flex d-flex md12 lg12 sm12 xs12>
          <a class="router-link-active">
            <img src="/static/logo_bank_bjb.png" alt="bank bjb" height="120px">
          </a>
        </v-flex>
        <!-- App Name -->
        <v-flex d-flex md12 lg12 sm12 xs12>
          <div>
            <v-subheader class="headline font-weight-bold secondary--text" style="font-size:28px !important"><i>e-Form</i></v-subheader>
          </div>
          <v-divider></v-divider>
        </v-flex>
        <!-- Moto -->
        <v-flex d-flex md12 lg12 sm12 xs12>
          <div class="text-xs-center">
            <div class="text-xs-center mt-1">
              <v-chip color="primary" text-color="white" class="uppercase"   
                      @click="$vuetify.goTo('#information', options)">Secure</v-chip>

              <v-chip color="secondary" text-color="white" class="uppercase"
                      @click="$vuetify.goTo('#information', options)">Fast</v-chip>

              <v-chip color="red" text-color="white" class="uppercase"
                      @click="$vuetify.goTo('#information', options)">Easy</v-chip>
            </div>
          </div>
        </v-flex>
        <!-- Phone Image -->
        <v-flex d-flex md12 lg12 sm12 xs12 ma-3>
          <img src="/static/iphone_portrait.png" :height="imageHeight()" />
        </v-flex>
      </v-layout>

      <v-layout column wrap align-center justify-end>
        <v-flex d-flex md12 lg12 sm12 xs12>
          <a href="https://www.apple.com/lae/ios/app-store/" target="_blank">
            <img src="/static/appstore.jpeg" height="35px">
          </a>
          <v-btn fab dark small color="primary" bottom @click="$vuetify.goTo('#savingTypes', options)">
            <v-icon dark>keyboard_arrow_down</v-icon>
          </v-btn>
          <a href="https://play.google.com/store?hl=en" target="_blank">
            <img src="/static/playstore.png" height="35px">
          </a>
        </v-flex>
      </v-layout>
      
    </v-parallax>

    <!-- SAVING TYPES -->
    <section id="savingTypes">
      <v-container fluid class="blue-white-bg">
        <v-layout row wrap>
          <v-flex xl12 lg12 md12 xs12 sm12 class="my-3">
            <div class="text-xs-center">
              <h1 class="headline uppercase white--text font-weight-bold">
                Jenis Tabungan
              </h1>
              <span class="subheading white--text">Pilih tabungan yang anda suka</span>
            </div>
          </v-flex>
          <v-flex
            v-for="card in savingTypes"
            v-bind="{ [`md${card.flex}`]: true }"
            xs12
            sm12
            :key="card.link"
            d-flex
            justify-center
          >
            <v-card 
              hover 
              ripple 
              class="rounded-card ma-2"
              color="grey lighten-5"
            >
              <v-card-media
                :src="card.src"
                height="150px"
                contain
              />
              
              <v-container
                pa-2
              >
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <h5 class="title mb-1 font-weight-bold primary--text" v-text="card.title"></h5>
                    <span v-if="card.content.length < 120">{{ card.content }}</span>
                    <div v-if="card.content.length > 120">
                      {{ card.content.substring(0, 120) + ".. " }} 
                      <span v-html="card.linkShowMore"></span>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :to="card.detailsPage + '/' + card.id" color="warning">
                  Daftar
                </v-btn>
                <!-- <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn> -->
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <!-- INFORMATION -->
    <section id="information">
      <v-parallax dark :height="900" src="/static/bjb/img_produkdanlayanan.jpg">
        <v-container fluid>
          <v-layout
            column
            wrap
            class="my-5"
            align-center
          >
            <v-flex xs12 sm12 class="my-1">
              <div class="text-xs-center">
                <h2 class="headline white--text font-weight-bold uppercase mb-2">E - Form</h2>
                <v-divider dark class="white--text"></v-divider>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-md>
                <v-layout row wrap align-center>
                  <v-flex xs12 md4>
                    <v-card 
                      hover 
                      ripple 
                      class="rounded-card"
                      color="white"
                      height="250"
                    >
                      <v-card-text class="text-xs-center" style="padding-bottom:0">
                        <v-icon x-large class="primary--text">lock</v-icon>
                      </v-card-text>
                      <v-card-title class="layout justify-center" style="padding-bottom:0">
                        <div class="headline text-xs-center primary--text">Secure</div>
                      </v-card-title>
                      <v-card-text style="padding-bottom:0">
                        Kerahasiaan data anda adalah No. 1.  <br> 
                        E-Form memastikan semua data yang dimasukan kedalam sistem, akan tersimpan dengan aman dan tidak akan disebarluaskan demi kepentingan lain.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card 
                      hover 
                      ripple 
                      class="rounded-card"
                      color="white"
                      height="250"
                    >
                      <v-card-text class="text-xs-center" style="padding-bottom:0">
                        <v-icon x-large class="primary--text">flash_on</v-icon>
                      </v-card-text>
                      <v-card-title class="layout justify-center" style="padding-bottom:0">
                        <div class="headline text-xs-center primary--text">Fast</div>
                      </v-card-title>
                      <v-card-text style="padding-bottom:0">
                        Pembukaan Rekening Baru dan Pengajuan Pinjaman lebih mudah dan proses yang cepat. 
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card 
                      hover 
                      ripple 
                      class="rounded-card"
                      color="white"
                      height="250"
                    >
                      <v-card-text class="text-xs-center" style="padding-bottom:0">
                        <v-icon x-large class="primary--text">build</v-icon>
                      </v-card-text>
                      <v-card-title class="layout justify-center" style="padding-bottom:0">
                        <div class="headline text-xs-center primary--text">Easy</div>
                      </v-card-title>
                      <v-card-text style="padding-bottom:0">
                        Mudah dalam pengisian, tidak perlu repot, bisa dimana saja dan kapan saja. 
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
      </v-parallax>
    </section>

    <!-- LOAN TYPES -->
    <section id="loanTypes">
      <v-container fluid class="yellow-white-bg">
        <v-layout row wrap>
          <v-flex xl12 lg12 md12 xs12 sm12 class="my-3">
            <div class="text-xs-center">
              <h1 class="headline uppercase white--text font-weight-bold">
                Jenis Pinjaman
              </h1>
              <span class="subheading white--text">Ajukan pinjaman yang anda mau</span>
            </div>
          </v-flex>
          <v-flex
            v-for="card in loanTypes"
            v-bind="{ [`md${card.flex}`]: true }"
            xs12
            sm12
            :key="card.title"
            d-flex
            justify-center
          >
            <v-card 
              hover 
              ripple 
              class="rounded-card ma-2"
              color="grey lighten-5"
            >
              <v-card-media
                :src="card.src"
                height="150px"
                contain
              >
              </v-card-media>
              <v-container
                pa-2
              >
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <h5 class="title mb-1 font-weight-bold primary--text" v-text="card.title"></h5>
                    <span v-if="card.content.length < 120">{{ card.content }}</span>
                    <div v-if="card.content.length > 120">
                      {{ card.content.substring(0, 120) + ".. " }} 
                      <span v-html="card.linkShowMore"></span>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :to="card.detailsPage + '/' + card.id" color="warning">
                  Daftar
                </v-btn>
                <!-- <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn> -->
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    
    <!-- CONTACT -->
    <v-container grid-list-xl>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm4>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="layout">
              <div class="title font-weight-bold secondary--text" style="margin-left:12px">Alamat Kantor Pusat bank<span class="primary--text"> bjb</span></div>
            </v-card-title>
            <v-card-text>
              <span>PT. Bank Pembangunan Daerah Jawa Barat & Banten, Tbk. <br></span>
              <span>Menara bank bjb <br></span>
              <span>JL. Naripan No. 12-14 <br></span>
              <span>Bandung 40111 <br></span>
              <span>Phone <a href="phone:+62-22-4234868">+62-22-4234868</a> <br></span>
              <span>Fax: <a href="phone:+62-22-4206099">+62-22-4206099</a> <br></span>
              <span>Mail: <a href="mailto:info@bankbjb.co.id">info@bankbjb.co.id</a></span>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 offset-sm1>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="layout">
              <div class="title font-weight-bold secondary--text" style="margin-left:12px">Contact Us</div>
            </v-card-title>
            <v-card-text>
              <img src="/static/bjb-call.jpg" alt=""><br>
              <v-layout row wrap>
                <v-flex md12>
                  <img src="/static/ico_twitter.png" alt="" style="float:left"> &nbsp;
                  <a href="https://twitter.com/infobankbjb" target="_blank" title="twitter: @infobankbjb">
                    <span>@infobankbjb</span>
                  </a>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex md12>
                  <img src="/static/ico_fb.png" alt="" style="float:left"> &nbsp;
                  <a href="https://www.facebook.com/BankBJBOfficial" target="_blank" title="facebook: BankBJBOfficial">
                    <span>BankBJBOfficial</span>
                  </a>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex md12>
                  <img src="/static/ico_instagram.png" alt="" style="float:left"> &nbsp;
                  <a href="https://www.instagram.com/bankbjb" target="_blank" title="instagram: BankBJBOfficial">
                    <span>BankBJBOfficial</span>
                  </a>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import router from "vue-router";

export default {
  data: () => ({
    drawer: false,
    // JENIS TABUNGAN
    savingTypes: [
      {
        id: "001",
        title: "TabunganKu",
        src: "/static/bjb/img_tabunganku.jpg",
        content:
          "TabunganKu adalah tabungan untuk perorangan dengan persyaratan mudah dan ringan yang diterbitkan secara bersama oleh bank-bank di Indonesia untuk menumbuhkan budaya menabung serta meningkatkan kesejahteraan masyarakat",
        flex: 3,
        detailsPage: "/tabunganKu",
        linkShowMore:
          "<a href='http://www.bankbjb.co.id/id/corporate-website/produk-dan-layanan/consumer-banking/tabunganku.html' target='_blank'>Show More</a>"
      },
      {
        id: "002",
        title: "Tandamata",
        src: "/static/bjb/bjb_tandamata.jpeg",
        content:
          "Hanya dengan setoran awal sebesar Rp 50.000,- Anda telah memiliki rekening Tabungan bjb Tandamata. Tabungan bjb Tandamata diikutsertakan dalam program undian berhadiah “Petik Hadiah bank bjb” secara rutin dengan memberikan hadiah terbesar.",
        flex: 3,
        detailsPage: "/registrationInfo",
        linkShowMore:
          "<a href='http://www.bankbjb.co.id/id/corporate-website/produk-dan-layanan/consumer-banking/bjb-tandamata.html' target='_blank'>Show More</a>"
      },
      {
        id: "003",
        title: "bjb Tandamata Berjangka",
        src: "/static/bjb/bjb_tandamata_berjangka.jpg",
        content:
          "Tabungan bjb Tandamata diikutsertakan dalam program undian berhadiah “Petik Hadiah bank bjb” secara rutin dengan memberikan hadiah terbesar.",
        flex: 3,
        detailsPage: "/tandaMataBerjangka",
        linkShowMore:
          "<a href='http://www.bankbjb.co.id/id/corporate-website/produk-dan-layanan/consumer-banking/bjb-tandamata-berjangka.html' target='_blank'>Show More</a>"
      },
      {
        id: "004",
        title: "bjb Tandamata Bisnis",
        src: "/static/bjb/img_tm_bisnis.jpg",
        content:
          "Fasilitas autotransfer dari rekening Tandamata Bisnis dan Giro Bisnis. Buku Tabungan dilengkapi deskripsi dan keterangan transaksi yang lebih jelas dan lengkap.",
        flex: 3,
        detailsPage: "/tandaMataBisnis",
        linkShowMore:
          "<a href='http://www.bankbjb.co.id/id/corporate-website/produk-dan-layanan/consumer-banking/bjb-tandamata-bisnis.html' target='_blank'>Show More</a>"
      },
      {
        id: "005",
        title: "bjb Tandamata Gold",
        src: "/static/bjb/img_tm_gold.jpg",
        content:
          "Hanya dengan setoran awal sebesar Rp 500.000,- Anda telah memiliki rekening Tabungan bjb Tandamata Gold dengan tingkat suku bunga premium. Gratis perlindungan asuransi jiwa untuk saldo rata-rata bulanan minimal Rp. 500.000.000,-",
        flex: 3,
        detailsPage: "/tandaMataGold",
        linkShowMore:
          "<a href='http://www.bankbjb.co.id/id/corporate-website/produk-dan-layanan/consumer-banking/bjb-tandamata-gold.html' target='_blank'>Show More</a>"
      },
      {
        id: "006",
        title: "bjb Tandamata Purnabakti",
        src: "/static/bjb/img_tm_purnabakti.jpg",
        content:
          "Tabungan yang diperuntukan bagi nasabah pensiunan dalam mata uang IDR yang dipergunakan sebagai media penerimaan untuk pembayaran pensiunan PT.Taspen",
        flex: 3,
        detailsPage: "/tandaMataPurnabakti",
        linkShowMore:
          "<a href='http://www.bankbjb.co.id/id/corporate-website/produk-dan-layanan/consumer-banking/bjb-tandamata-purnabakti.html' target='_blank'>Show More</a>"
      },
      {
        id: "007",
        title: "bjb Tandamata My First",
        src: "/static/bjb/img_tm_myfirst.jpg",
        content:
          "bjb Tandamata My First adalah Tabungan Perorangan dalam mata uang rupiah sebagai tabungan edukasi bagi anak untuk memulai belajar dan membudayakan menabung.",
        flex: 3,
        detailsPage: "/TandaMataMyFirst",
        linkShowMore:
          "<a href='http://www.bankbjb.co.id/id/corporate-website/produk-dan-layanan/consumer-banking/bjb-tandamata-myfirst.html' target='_blank'>Show More</a>"
      },
      {
        id: "008",
        title: "Simpeda",
        src: "/static/bjb/teller.jpeg",
        content:
          "Tabungan BPD seluruh Indonesia dalam mata uang Rupiah yang diperuntukan bagi nasabah perorangan / non perorangan dalam kebutuhan transaksi sehari-hari.",
        flex: 3,
        detailsPage: "/simpeda",
        linkShowMore:
          "<a href='http://www.bankbjb.co.id/id/corporate-website/produk-dan-layanan/consumer-banking/simpeda.html' target='_blank'>Show More</a>"
      }
    ],
    // JENIS LOAN
    loanTypes: [
      {
        id: "001",
        title: "bjb Kredit Guna Bhakti",
        src: "/static/bjb/bjb_guna_bakti.jpg",
        content:
          "bjb Kredit Guna Bhakti is a funding method with multipurpose goal for our debtor with fixed salary income, channelled through the cooperation agreement between bjb Bank with the debtor’s current working company and the funding source comes from the debtor’s salary.",
        flex: 3,
        detailsPage: "/kreditGunaBakti",
        linkShowMore:
          "<a href='http://www.bankbjb.co.id/id/corporate-website/produk-dan-layanan/consumer-banking/bjb-kredit-guna-bhakti.html' target='_blank'>Show More</a>"
      },
      {
        id: "002",
        title: "bjb KPR",
        src: "/static/bjb/loan_kpr.jpg",
        content:
          "Fasilitas kredit konsumtif yang diberikan bank bjb kepada Calon Debitur perorangan untuk membeli atau memilki Properti (Rumah Tapak/Apartemen/Rumah Toko/Rumah Kantor), baik pembelian baru (Primary) dari Pengembang Perusahaan maupun pembelian bekas (Secondary) dari non Pengembang Perumahan.",
        flex: 3,
        detailsPage: "/loanInfo",
        linkShowMore:
          "<a href='http://www.bankbjb.co.id/id/corporate-website/produk-dan-layanan/consumer-banking/bjb-kpr.html' target='_blank'>Show More</a>"
      },
      {
        id: "003",
        title: "bjb Kredit Pra Purna Bhakti (KPPB)",
        src: "/static/bjb/bjb_pra_purna_bakti.jpg",
        content:
          "bjb Kredit Pra Purna Bhakti adalah pembiayaan dengan tujuan multiguna yang diberikan oleh bank bjb kepada Aparatur Sipil Negera (ASN) yang akan memasuki masa pensiun. Dimana maksimal sisa masa dinas debitur yang dapat menerima kredit adalah 5 tahun.",
        flex: 3,
        detailsPage: "/kreditPraPurnaBhakti",
        linkShowMore:
          "<a href='http://www.bankbjb.co.id/id/corporate-website/produk-dan-layanan/consumer-banking/bjb-kredit-pra-purna-bhakti-kppb.html' target='_blank'>Show More</a>"
      },
      {
        id: "004",
        title: "bjb Kredit Purna Bhakti (KPB)",
        src: "/static/bjb/bjb_purna_bakti.jpg",
        content:
          "bjb Kredit Purna Bhakti adalah pembiayaan dengan tujuan multiguna yang diberikan oleh bank bjb kepada debitur pensiunan sendiri dan pensiunan janda / duda dimana manfaat pensiun debitur dipastikan akan atau telah disalurkan melalui bank bjb.",
        flex: 3,
        detailsPage: "/kreditPurnaBhakti",
        linkShowMore:
          "<a href='http://www.bankbjb.co.id/id/corporate-website/produk-dan-layanan/consumer-banking/bjb-kredit-purna-bhakti-kpb.html' target='_blank'>Show More</a>"
      },
      {
        id: "005",
        title: "bjb Back to Back Loan",
        src: "/static/bjb/kredit_b2b.jpg",
        content:
          "bjb Back to Back Loan adalah pembiayaan dengan tujuan multiguna yang diberikan oleh bank bjb kepada debitur perorangan dengan jaminan berupa Agunan Kas (Giro/Tabungan/Deposito).",
        flex: 3,
        detailsPage: "/backToBackLoan",
        linkShowMore:
          "<a href='http://www.bankbjb.co.id/id/corporate-website/produk-dan-layanan/consumer-banking/bjb-back-to-back-loan.html' target='_blank'>Show More</a>"
      }
    ],
    windowHeight: 0,
    linkRegistration: "<a href='/registrationInfo'>Show More</a>",
    linkLoan: "<a href='/loanInfo'>Show More</a>",
    duration: 1500,
    offset: -60,
    easing: "easeInOutCubic"
  }),
  beforeMount() {
    this.windowHeight = window.innerHeight;
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight;
    },
    imageHeight() {
      console.log(this.$vuetify.breakpoint.name);
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          // < 600px
          return "275px";
        case "sm":
          // 600px > < 960px
          return "360px";
        case "md":
          // 960px > < 1264*
          return "400px";
        case "lg":
          // 1264 > < 1904px*
          return "450px";
        case "xl":
          // > 1904px*
          return "550px";
      }
    }
  },
  computed: {
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    }
  }
};
</script>

<style scoped>
.rounded-card {
  border-radius: 10px;
}
.blue-white-bg {
  background: linear-gradient(-151deg, #005683 50%, #ffffff 50%);
}
.yellow-white-bg {
  background: linear-gradient(151deg, #ffd600 50%, #ffffff 50%);
}
.float-right {
  float: right;
}
#carouselItems {
  height: 100vh;
}
.underlined {
  text-decoration: underline;
}
.uppercase {
  text-transform: uppercase;
}

/* .phoneLogo{
  max-width: 100%;
  height: auto;
} */
</style>