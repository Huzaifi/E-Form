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
    
    <!-- CONTENT FORM -->
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm12 md8 lg8 xl8>
          <v-stepper v-model="formStep" alt-labels>
            <v-stepper-header>
              <v-stepper-step 
                :complete="formStep > 1" 
                step="1"
              >
                Validate
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step 
                :complete="formStep > 2" 
                step="2"
              >
                Data Pemohon
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step 
                :complete="formStep > 3" 
                step="3"
              >
                Data Permohonan
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step 
                :complete="formStep > 4" 
                step="4"
              >
                Data Pekerjaan
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step 
                :complete="formStep > 5" 
                step="5"
              >
                Data Jaminan
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step 
                :complete="formStep > 6" 
                step="6"
              >
                Finish
              </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <!-- STEP 1: Validate -->
              <v-stepper-content step="1">
                <v-container>
                  <v-form 
                    ref="form1" 
                    v-model="form1Valid" 
                    lazy-validation
                    @submit="validateForm1"
                  >
                    <v-card class="transparent elevation-0">
                      <v-card-text>
                        <v-text-field
                          v-model="dataLoan.no_loan"
                          :rules="[v => !!v || 'No. Pengajuan tidak boleh kosong']"
                          mask="########"
                          :counter="8"
                          label="No. Pengajuan"
                          required
                          hint="Silahkan Masukan No. Pengajuan anda."
                          persistent-hint
                        ></v-text-field>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn to="/" color="warning">cancel</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn 
                          @click="validateForm1" 
                          color="secondary"
                          :loading="loadingDialog"
                          :disabled="loadingDialog || !form1Valid"
                        >
                          validate
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-form>
                </v-container>
              </v-stepper-content>
              
              <!-- STEP 2: Data Pemohon -->
              <v-stepper-content step="2">
                <v-container>
                  <v-card class="transparent elevation-0">
                    <v-card-text>
                      <h3 class="primary--text font-weight-bold">Data E-KTP</h3>
                      <v-layout wrap mt-3>
                        <v-flex md12 xs12>
                          <v-divider></v-divider>
                          <v-input :messages="dataLoan.pemohon.nik">
                            No. Induk KTP
                          </v-input>
                        </v-flex>
                      </v-layout>
                      <v-layout wrap>
                        <v-flex md4 xs12>
                          <v-input :messages="dataLoan.pemohon.nama_lgkp">
                            Nama Lengkap
                          </v-input>
                        </v-flex>
                        <v-flex md4 xs12>
                          <v-input :messages="dataLoan.pemohon.tmpt_lhr + ', ' + dataLoan.pemohon.tgl_lhr">
                            Tempat/Tanggal Lahir
                          </v-input>
                        </v-flex>
                        <v-flex md4 xs12>
                          <v-input :messages="dataLoan.pemohon.jenis_klmin">
                            Jenis Kelamin
                          </v-input>
                        </v-flex>
                      </v-layout>
                      <!-- ALAMAT -->
                      <v-layout wrap>
                        <v-flex md12 xs12>
                          <v-input :messages="dataLoan.pemohon.alamat">
                            Alamat
                          </v-input>
                        </v-flex>  
                      </v-layout>
                      <v-layout wrap>
                        <v-flex md3 xs12>
                          <v-input :messages=" '00' + dataLoan.pemohon.no_rt + '/00' + dataLoan.pemohon.no_rw">
                            RT / RW
                          </v-input>
                        </v-flex>
                        <v-flex md3 xs12>
                          <v-input :messages="dataLoan.pemohon.kel_name">
                            Kelurahan / Desa
                          </v-input>
                        </v-flex>
                        <v-flex md3 xs12>
                          <v-input :messages="dataLoan.pemohon.kec_name">
                            Kecamatan
                          </v-input>
                        </v-flex>
                      </v-layout>
                      <!-- OTHER -->
                      <v-layout wrap mb-4>
                        <v-flex md3 xs12>
                          <v-input :messages="dataLoan.pemohon.status_kawin">
                            Status Perkawinan
                          </v-input>
                        </v-flex>
                        <v-flex md3 xs12>
                          <v-input :messages="dataLoan.pemohon.jenis_pkrjn">
                            Pekerjaan
                          </v-input>
                        </v-flex>
                        <v-flex md3 xs12>
                          <v-input :messages="dataLoan.pemohon.agama">
                            Agama
                          </v-input>
                        </v-flex>
                        <v-flex md3 xs12>
                          <v-input :messages="dataLoan.pemohon.pddk_akh">
                            Pendidikan Akhir
                          </v-input>
                        </v-flex>
                      </v-layout>
                      <v-divider></v-divider>
                    </v-card-text>
                  </v-card>
                  
                  <!-- FORM PEMOHON -->
                  <v-form ref="form2" v-model="form2Valid" lazy-validation>
                    <v-card class="transparent elevation-0">
                      <v-card-text>
                        <v-layout row wrap>
                          <v-flex md12 xs12>
                            <v-text-field
                              :rules="rules.npwp"
                              mask="##.###.###.#-###.###"
                              v-model="dataLoan.pemohon.npwp"
                              :counter="15"
                              label="No. NPWP (Optinal)"
                              hint="Silahkan Masukan No. NPWP yang terdaftar."
                              persistent-hint
                            ></v-text-field>
                          </v-flex>
                          
                          <v-flex md12 xs12>
                            <v-text-field
                              :rules="rules.handphone"
                              mask="####-####-#####"
                              v-model="dataLoan.pemohon.handphone"
                              :counter="13"
                              label="No. Handphone *"
                              required
                              hint="Silahkan Masukan No. Handphone anda."
                              persistent-hint
                            ></v-text-field>
                          </v-flex>

                          <v-flex md12 xs12>
                            <v-text-field
                              v-model="dataLoan.pemohon.email"
                              :rules="rules.email"
                              :counter="50"
                              label="Email (Optional)"
                              hint="Silahkan Masukan Email anda."
                              persistent-hint
                            ></v-text-field>
                          </v-flex>
                        </v-layout>

                        <!-- <v-layout row wrap>
                          <v-flex md4 xs12 pr-2>
                            <v-text-field
                              :rules="rules.teleponPrefix"
                              mask="####"
                              v-model="item.teleponPrefix"
                              :counter="4"
                              label="No. Telpon Rumah"
                              hint="Prefix."
                              persistent-hint
                            ></v-text-field>
                          </v-flex>
                          <v-flex md8 xs12 pl-2>
                            <v-text-field
                              :rules="rules.telepon"
                              mask="####-#####"
                              v-model="item.telepon"
                              :counter="9"
                              hint="Silahkan Masukan No. Telpon Rumah anda."
                              persistent-hint
                            ></v-text-field>
                          </v-flex>
                        </v-layout> -->

                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="warning" @click="formStep = 1">back</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn 
                          color="secondary"
                          :loading="loadingDialog"
                          :disabled="loadingDialog || !form2Valid"
                          @click="validateForm2"
                        >
                          confirm
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-form>
                </v-container>
              </v-stepper-content>

              <!-- STEP 3: DATA PERMOHONAN -->
              <v-stepper-content step="3">
                <v-container>
                  <v-form ref="form3" v-model="form3Valid" lazy-validation>
                    <v-card class="transparent elevation-0">
                      <v-card-text>
                        <v-layout row wrap>
                          <v-flex md12 xs12>
                            <v-select
                              v-model="dataLoan.tujuan_penggunaan_id"
                              :items="bulkItems.tujuanPenggunaan"
                              item-text="description"
                              item-value="id"
                              :rules="[v => !!v || 'Item is required']"
                              label="Tujuan Penggunaan"
                              required
                            ></v-select>
                          </v-flex>
                          
                          <v-flex md12 xs12>
                            <v-text-field
                              mask="###.###.###.###"
                              v-model="dataLoan.nominal_permohonan"
                              :counter="13"
                              label="Kredit yang Dimohon (Rupiah) *"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex md12 xs12>
                            <v-text-field
                              mask="##"
                              v-model="dataLoan.jangka_waktu"
                              :counter="2"
                              label="Tenor (Bulan) *"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex md12 xs12>
                            <v-select
                              v-model="dataLoan.jenis_kredit_id"
                              :items="bulkItems.tipeKredit"
                              item-text="description"
                              item-value="id"
                              :rules="[v => !!v || 'Item is required']"
                              label="Jenis Kredit"
                              required
                            ></v-select>
                          </v-flex>

                          <v-flex md12 xs12>
                            <v-select
                              v-model="dataLoan.jenis_angsuran_id"
                              :items="bulkItems.jenisAngsuran"
                              item-text="description"
                              item-value="id"
                              :rules="[v => !!v || 'Item is required']"
                              label="Jenis Angsuran"
                              required
                            ></v-select>
                          </v-flex>
                        </v-layout>

                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="warning" @click="formStep = 2">back</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn 
                          color="secondary"
                          :loading="loadingDialog"
                          :disabled="loadingDialog || !form3Valid"
                          @click="validateForm3"
                        >
                          confirm
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-form>
                </v-container>
              </v-stepper-content>

              <!-- STEP 3: DATA PEKERJAAN -->
              <v-stepper-content step="4">
                <v-container>
                  <v-form ref="form4" v-model="form4Valid" lazy-validation>
                    <v-card class="transparent elevation-0">
                      <v-card-text>
                        <v-layout row wrap>
                          <v-flex md12 xs12>
                            <v-select
                              v-model="dataLoan.pekerjaan.sumber_penghasilan_id"
                              :items="bulkItems['sumberPenghasilan']"
                              item-text="description"
                              item-value="id"
                              :rules="[v => !!v || 'Item is required']"
                              label="Sumber Penghasilan"
                              required
                            ></v-select>
                          </v-flex>

                          <v-flex md12 xs12>
                            <v-select
                              v-model="dataLoan.pekerjaan.penghasilan_bulan_id"
                              :items="bulkItems['penghasilanBulan']"
                              item-text="description"
                              item-value="id"
                              :rules="[v => !!v || 'Item is required']"
                              label="Penghasilan Per Bulan"
                              required
                            ></v-select>
                          </v-flex>

                          <v-flex md12 xs12>
                            <v-select
                              v-model="dataLoan.pekerjaan.jenis_pekerjaan_id"
                              :items="bulkItems['jenisPekerjaan']"
                              item-text="description"
                              item-value="id"
                              :rules="[v => !!v || 'Item is required']"
                              label="Pekerjaan"
                              required
                            ></v-select>
                          </v-flex>

                          <v-flex md12 xs12>
                            <v-text-field
                              v-model="dataLoan.pekerjaan.lama_bekerja"
                              :rules="[v => !!v || 'Item is required']"
                              :counter="3"
                              mask="###"
                              label="Lama Bekerja (Bulan) *"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex md12 xs12>
                            <v-select
                              v-model="dataLoan.pekerjaan.bidang_usaha_id"
                              :items="bulkItems['bidangUsaha']"
                              item-text="description"
                              item-value="id"
                              :rules="[v => !!v || 'Item is required']"
                              label="Bidang Usaha"
                              required
                            ></v-select>
                          </v-flex>

                          <v-flex md12 xs12>
                            <v-select
                              v-model="dataLoan.pekerjaan.sektor_ekonomi_id"
                              :items="bulkItems['sektorEkonomi']"
                              item-text="description"
                              item-value="id"
                              :rules="[v => !!v || 'Item is required']"
                              label="Sektor Ekonomi"
                              required
                            ></v-select>
                          </v-flex>
                          
                          <v-flex md12 xs12>
                            <v-text-field
                              v-model="dataLoan.pekerjaan.usaha_nama"
                              :counter="255"
                              label="Nama Usaha"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex md12 xs12>
                            <v-text-field
                              v-model="dataLoan.pekerjaan.usaha_posisi"
                              :counter="50"
                              label="Jabatan"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex md12 xs12>
                            <v-text-field
                              v-model="dataLoan.pekerjaan.usaha_alamat"
                              :counter="255"
                              label="Alamat"
                              required
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn color="warning" @click="formStep = 3">back</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn 
                          color="secondary"
                          :loading="loadingDialog"
                          :disabled="loadingDialog || !form4Valid"
                          @click="validateForm4"
                        >
                          confirm
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-form>
                </v-container>
              </v-stepper-content>
              
              <!-- STEP 5: DATA JAMINAN -->
              <v-stepper-content step="5">
                <v-container>
                  <v-form ref="form5" v-model="form5Valid" lazy-validation>
                    <v-card class="transparent elevation-0">
                      <v-card-text>
                        <v-layout row wrap>
                          <v-flex md12 xs12>
                            <v-select
                              v-model="dataLoan.jaminan.jaminan_jenis_id"
                              :items="bulkItems.jenisJaminan"
                              item-text="description"
                              item-value="id"
                              :rules="[v => !!v || 'Item is required']"
                              label="Bentuk Jaminan"
                              required
                            ></v-select>
                          </v-flex>

                          <v-flex md12 xs12>
                            <v-select
                              v-model="dataLoan.jaminan.atas_nama_id"
                              :items="bulkItems.statusTanah"
                              item-text="description"
                              item-value="id"
                              :rules="[v => !!v || 'Item is required']"
                              label="Status Kepemilikan Jaminan"
                              required
                            ></v-select>
                          </v-flex>
                          
                          <v-flex md12 xs12>
                            <v-text-field
                              mask="###.###.###.###"
                              v-model="dataLoan.jaminan.nilai_jaminan"
                              :counter="13"
                              label="Perkiraan Harga Jaminan (Rupiah) *"
                              required
                            ></v-text-field>
                          </v-flex>

                          <!-- <v-flex md12 xs12>
                            <v-text-field
                              v-model="item.nominal_permohonan"
                              :counter="13"
                              label="Lokasi Jaminan"
                              required
                            ></v-text-field>
                          </v-flex> -->
                        </v-layout>
                        
                        <!-- <v-layout row wrap>
                          <v-flex md6 xs12>
                            <v-text-field
                              v-model="item.nominal_permohonan"
                              :counter="13"
                              label="Kota / Kabupaten"
                              required
                            ></v-text-field>
                          </v-flex>
                          <v-flex md6 xs12>
                            <v-text-field
                              v-model="item.nominal_permohonan"
                              :counter="13"
                              label="Provinsi"
                              required
                            ></v-text-field>
                          </v-flex>
                        </v-layout> -->

                        <v-layout row wrap>
                          <v-flex md12 xs12>
                            <v-text-field
                              v-model="dataLoan.jaminan.lainnya_keterangan"
                              :counter="255"
                              label="Deskripsi Jaminan"
                              required
                            ></v-text-field>
                          </v-flex>
                        </v-layout>

                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="warning" @click="formStep = 4">back</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn 
                          color="secondary"
                          :loading="loadingDialog"
                          :disabled="loadingDialog || !form5Valid"
                          @click="validateForm5"
                        >
                          confirm
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-form>
                </v-container>
              </v-stepper-content>

              <!-- STEP 6: FINISH -->
              <v-stepper-content step="6">
                <v-container>
                  <v-form ref="form6" v-model="form6Valid" lazy-validation>
                    <v-card class="transparent elevation-0">
                      <v-card-title primary-title>
                        <h1>Pernyataan Pemohon</h1>
                      </v-card-title>
                      <v-card-text>
                        <ul>
                          <li>Semua data yang disampaikan kepada pihan bank bjb telah lengkap dan benar</li>
                          <li>bank bjb telah memberikan informasi yang jelas dan memadai kepada pemohon perihal prosedur, syarat dan ketentuan <strong>bjb KPR</strong></li>
                          <li>Pemohon telah membaca dan memahami ketentuan <strong>bjb KPR</strong></li>
                          <li>bank bjb berhak menolak permohonan <strong>bjb KPR</strong> yang diajukan Pemohon apabila Pemohon tidak memenuhi persyaratan untuk memperoleh fasilitas <strong>bjb KPR</strong></li>
                        </ul>
                        <v-checkbox
                          v-model="dataLoan.confirm1"
                          :rules="[v => !!v || 'Anda harus menyetujui persyaratan ini']"
                          label="Dengan ini Saya(Pemohon) menyatakan bahwa segala informasi dan data yang saya cantumkan dalam E-Form Permohonan Kredit ini adalah Benar dan Saya(Pemohon) setuju memberikan data tersebut kepada pihak bank bjb"
                          required
                        ></v-checkbox>
                        <v-checkbox
                          v-model="dataLoan.confirm2"
                          :rules="[v => !!v || 'Anda harus menyetujui persyaratan ini']"
                          label="Dengan ini Saya(Pemohon) mengajukan Permohonan Kredit sesuai dengan informasi yang Saya cantumkan di E-Form"
                          required
                        ></v-checkbox>
                        <v-divider></v-divider>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="warning" @click="formStep = 5">back</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn 
                          @click="validateForm6"
                          color="secondary"
                          :loading="loadingDialog"
                          :disabled="loadingDialog || !form6Valid"
                        >
                          submit
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-form>
                </v-container>
              </v-stepper-content>
              
            </v-stepper-items>

          </v-stepper>

          <!-- LOADING BAR -->
          <v-dialog
            v-model="loadingDialog"
            persistent
            width="300"
          >
            <v-card
              color="primary"
              dark
            >
              <v-card-text>
                <v-progress-linear
                  indeterminate
                  color="white"
                  class="mb-0"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>

          <!-- ERROR MESSAGE -->
          <v-dialog
            v-model="errorDialog"
            persistent
            width="300"
          >
            <v-card
              color="white"
              dark
            >
              <v-card-title primary-title>
                <h3 class="error--text font-weight-bold">Pesan Error</h3>
                <v-divider></v-divider>
              </v-card-title>
              <v-card-text>
                <span class="black--text"> {{ errorMessage }}. </span>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue lighten-1"
                  flat="flat"
                  @click="errorDialog = false"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- SUCCESS MESSAGE -->
          <v-dialog
            v-model="successDialog"
            persistent
            width="600"
          >
            <v-layout row justify-center>
              <v-card
                color="white"
                dark
              >
                <v-card-title>
                  <v-layout row wrap>
                    <v-flex justify-center align-center>
                      <h3 class="headline font-weight-bold text-xs-center primary--text">
                        FORM PERUBAHAN DATA PINJAMAN
                      </h3>
                    </v-flex>
                  </v-layout>
                </v-card-title>

                <v-card-text>
                  <h3 class="headline black--text text-xs-center font-weight-bold" style="font-size: 32px !important"> 
                    {{ responseSuccess.no_loan }} 
                  </h3>
                  <br>
                  <p class="black--text text-xs-justify">
                    Anda baru saja melakukan perubahan data untuk pengajuan pinjaman. 
                    Segera bawa bukti pengajuan ini ke cabang bank bjb terdekat, 
                    paling lambat 3X24 jam kerja, atau data pengajuan akan terhapus secara otomatis.
                  </p>
                  <br>
                  <span class="black--text font-weight-bold">Tanggal Update: {{ responseSuccess.created_at }} </span>
                  <br>
                  <span class="black--text">
                  Terima Kasih. <br><br>
                  </span>

                  <span class="black--text mt-4">
                    Salam bank <strong>bjb</strong> <br>
                  </span>
                  <span class="black--text mt-4">
                    Copyright 2018. bank <strong>bjb</strong>
                  </span>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue lighten-1"
                    flat="flat"
                    @click="successDialog = false"
                    to="/"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-layout>
          </v-dialog>
          
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import api from "../store/api";

export default {
  data() {
    return {
      drawer: false,
      rules: {
        nik: [
          v => !!v || "No. E-KTP tidak Boleh kosong",
          v => (v && v.length == 16) || "NIK harus terdiri dari 16 angka"
        ],
        email: [
          v => {
            if (v == "") {
              return;
            } else {
              if (/.+@.+/.test(v)) {
                return;
              } else {
                return "E-mail harus valid";
              }
            }
          },
          v => {
            if (v == "") {
              return;
            } else {
              if (v.length > 50) {
                return "Email tidak boleh lebih dari 50 karakter";
              } else {
                return;
              }
            }
          }
        ],
        handphone: [
          v => !!v || "No. Handphone tidak Boleh kosong",
          v =>
            (v != "" && v.length >= 10 && v && v.length <= 13) ||
            "No. Handphone harus terdiri dari 10-13 angka"
        ]
      },
      // Fields
      dataLoan: {
        no_loan: "",
        tujuan_penggunaan_id: "",
        nominal_permohonan: "",
        jangka_waktu: "",
        jenis_kredit_id: "",
        jenis_angsuran_id: "",
        pemohon: {},
        pasangan: {},
        pekerjaan: {
          sumber_penghasilan_id: "",
          jenis_pekerjaan_id: "",
          lama_bekerja: "",
          bidang_usaha_id: "",
          sektor_ekonomi_id: "",
          usaha_nama: "",
          usaha_posisi: "",
          usaha_alamat: ""
        },
        penjamin: {},
        jaminan: {
          jaminan_jenis_id: "",
          atas_nama_id: "",
          nilai_jaminan: "",
          lainnya_keterangan: ""
        }
      },
      // End Fields
      formStep: 0,
      form1Valid: true,
      form2Valid: true,
      form3Valid: true,
      form4Valid: true,
      form5Valid: true,
      form6Valid: true,
      errorMessage: "",
      loadingDialog: false,
      errorDialog: false,
      successDialog: false,
      agree: false,
      responseSuccess: {},
      necessaryParams: [
        "tujuanPenggunaan",
        "tipeKredit",
        "jenisAngsuran",
        "sumberPenghasilan",
        "penghasilanBulan",
        "jenisPekerjaan",
        "jenisPekerjaanKTP",
        "bidangUsaha",
        "sektorEkonomi",
        "jenisJaminan",
        "statusTanah"
      ],
      bulkItems: {}
    };
  },
  mounted() {
    api.getParametersBulk(this.necessaryParams).then(response => {
      this.bulkItems = response.data.items;
      console.log(this.bulkItems);
    });
  },
  methods: {
    validateForm1(e) {
      e.preventDefault();
      if (this.$refs.form1.validate()) {
        this.loadingDialog = true;
        api
          .inqLoan(this.dataLoan.no_loan)
          .then(response => {
            // success
            this.dataLoan = response.data;
            this.formStep = 2;
            this.loadingDialog = false;
          })
          .catch(error => {
            if (error.response.data.message) {
              this.errorDialog = true;
              this.errorMessage = error.response.data.message;
              this.loadingDialog = false;
            } else {
              this.errorDialog = true;
              this.errorMessage =
                "Pastikan anda terhubung dengan internet. Silahkan coba lagi. Jika pesan error masih muncul, mohon untuk menghubungi customer care kami";
              this.loadingDialog = false;
            }
          });
      }
    },
    validateForm2() {
      if (this.$refs.form2.validate()) {
        this.formStep = 3;
      }
    },
    validateForm3() {
      if (this.$refs.form3.validate()) {
        this.formStep = 4;
      }
    },
    validateForm4() {
      if (this.$refs.form4.validate()) {
        this.formStep = 5;
      }
    },
    validateForm5() {
      if (this.$refs.form5.validate()) {
        this.formStep = 6;
      }
    },
    validateForm6() {
      if (this.$refs.form6.validate()) {
        this.loadingDialog = true;
        // this.dataLoan.pemohon = this.ektp;
        this.dataLoan.office_code = "002";
        this.$http
          .put(
            "http://103.217.173.123:5020/api/v1/loans/" + this.dataLoan.id,
            this.dataLoan,
            {
              headers: {
                Authorization:
                  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJicWx0QmJURU0yeEI0QlNadWpPNW5HMjBkbkJlVUx2ZCJ9.eKJb9nYsrKLXhaKVMc-L813Dgpx96MST3Day7EkIGAs"
              }
            }
          )
          .then(
            response => {
              this.loadingDialog = false;
              this.responseSuccess = response.body;
              this.successDialog = true;
            },
            response => {
              if (response.body.message) {
                this.errorDialog = true;
                this.errorMessage = response.body.message;
                this.loadingDialog = false;
              } else {
                this.errorDialog = true;
                this.errorMessage =
                  "Pastikan anda terhubung dengan internet. Silahkan coba lagi. Jika pesan error masih muncul, mohon untuk menghubungi customer care kami";
                this.loadingDialog = false;
              }
            }
          );
      }
    },
    downloadPdf() {
      window.open(
        "http://103.217.173.123:5020/api/v1/download_pdf/" +
          this.responseSuccess.no_loan +
          ".pdf",
        "_blank"
      );
    }
  }
};
</script>


<style scoped>
</style>
