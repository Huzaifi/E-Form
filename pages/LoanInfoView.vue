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

    <v-container fluid>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-layout align-center justify-center>
          <v-flex>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Terms and Conditions</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <h1>bjb KPR</h1>
                <p>
                  Bersama bjb KPR & Mortgage, dengan jaringan pelayanan bank bjb yang tersebar di wilayah Indonesia, kami akan membantu Anda mewujudkan impian untuk memiliki Properti Idaman dengan mudah, cepat dan nyaman.
                </p>
                <strong>bjb KPR</strong>
                <p>
                  Fasilitas kredit konsumtif yang diberikan bank bjb kepada Calon Debitur perorangan untuk membeli atau memilki Properti (Rumah Tapak/Apartemen/Rumah Toko/Rumah Kantor), baik pembelian baru (Primary) dari Pengembang Perusahaan maupun pembelian bekas (Secondary) dari non Pengembang Perumahan.
                </p>
                <strong>bjb Mortgage Properti</strong>
                <p>
                  Fasilitas kredit Konsumtif yang diberikan bank bjb kepada Calon Debitur perorangan selain tujuan pembelian rumah tinggal dengan agunan berupa Properti atau tanah kosong/ kavling yang akan dibangun Properti (khusus fasilitas kredit Membangun), yang telah dimiliki oleh Calon Debitur, beberapa produknya adalah:
                </p>
                <ul>
                  <li>Multiguna atau Refinancing</li>
                  <li>Membangun</li>
                  <li>Take Over  Xtra, dan</li>
                  <li>Top Up </li>
                </ul>
                <strong>Keunggulan: </strong>
                <ul>
                  <li>Bunga Kompetitif.</li>
                  <li>Proses Cepat & Mudah.</li>
                  <li>Jangka Waktu Fleksibel s/d 15 tahun.</li>
                  <li>Memiliki Jaringan kantor yang luas serta Kerjasama dengan Pengembang-Pengembang besar.</li>
                </ul>
                <strong>Syarat & Ketentuan Umum : </strong>
                <ul>
                  <li>Calon Debitur dan Suami/Istri Calon Debitur merupakan Warga Negara Indonesia </li>
                  <li>Jenis Pekerjaan : Pegawai, Profesional (min. 3 tahun berada di bidang yang sama), Wirausaha (min. 2 tahun menjalani bidang usaha yang sama), Pensiunan (payroll melalui bank bjb).</li>
                  <li>Usia Pemohon minimal 21 tahun / pernah menikah dan saat kredit lunas berusia maksimal 55 tahun atau 1 tahun sebelum masa pensiun (pegawai) serta 65 tahun (profesional, Wirausaha dan Pensiunan).</li>
                  <li>Plafond Minimum mulai dari Rp. 25 Juta* Maksimum s/d Rp. 40 Milyar*.</li>
                  <li>Jangka Waktu Kredit s/d 15 tahun*.</li>
                  <li>Membayar biaya-biaya seperti : Provisi, Administrasi, Biaya Taksasi Agunan, Biaya Notaris, Biaya Pengikatan Agunan, Biaya Asuransi dan biaya-biaya lain yang mengikat. </li>
                </ul>
                <strong>Keterangan :</strong>
                <p>*) Syarat dan Ketentuan berlaku</p>
                <!-- TABLE -->
                <br>&nbsp;
                
                <div style="overflow-x:auto;">
                    <table border="1" cellspacing="1" cellpadding="1">
                    <tbody>
                        <tr>
                            <th width="25">
                                <p>
                                    <strong>
                                        No
                                    </strong>
                                </p>
                            </th>
                            <th width="371">
                                <p>
                                    <strong>
                                        Jenis Dokumen
                                    </strong>
                                </p>
                            </th>
                            <th style="text-align:center;" width="64">
                                <p>
                                    <strong>
                                        Pegawai
                                    </strong>
                                </p>
                            </th>
                            <th style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        Pensiunan
                                    </strong>
                                </p>

                            </th>
                            <th style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        Profesional
                                    </strong>
                                </p>
                            </th>
                            <th style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        Wirausaha
                                    </strong>
                                </p>
                            </th>
                        </tr>
                        <tr class="trodd">
                            <td width="25">
                                <p>
                                    <strong>
                                        <em>
                                            A
                                        </em>
                                    </strong>
                                </p>
                            </td>
                            <td colspan="5" valign="bottom" width="592">
                                <p>
                                    <strong>
                                        Dokumen
                                        <em>
                                            Pribadi Calon
                                        </em>
                                        Debitur
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="treven">
                            <td valign="top" width="25">
                                <p>
                                    1
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Asli
                                    <strong>
                                        Formulir Aplikasi
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="25">
                                <p>
                                    2
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Copy KTP suami dan istri
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="treven">
                            <td valign="top" width="25">
                                <p>
                                    3
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Copy Kartu Keluarga
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="25">
                                <p>
                                    4
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Copy Akta /Surat Nikah (bagi yang sudah menikah)
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="treven">
                            <td valign="top" width="25">
                                <p>
                                    5
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Copy Akta Cerai atau Surat Keterangan Meninggal pasangan bagi yang berstatus duda/janda
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="25">
                                6
                            </td>
                            <td width="371">
                                Asli Surat Keterangan Belum Menikah (bagi yang belum menikah) minimal dari Kelurahan
                            </td>
                            <td style="text-align:center;" width="64">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                        </tr>
                        <tr class="treven">
                            <td valign="top" width="25">
                                7
                            </td>
                            <td width="371">
                                Copy NPWP
                            </td>
                            <td style="text-align:center;" width="64">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="25">
                                8
                            </td>
                            <td width="371">
                                Surat Pernyataan Calon Debitur atas Kredit Konsumtif Beragun Properti yang sedang dimiliki/diajukan.
                            </td>
                            <td style="text-align:center;" width="64">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                        </tr>
                        <tr class="treven">
                            <td width="25">
                                <p>
                                    <strong>
                                        <em>
                                            B
                                        </em>
                                    </strong>
                                </p>
                            </td>
                            <td colspan="5" valign="bottom" width="592">
                                <p>
                                    <strong>
                                        <em>
                                            Dokumen Penghasilan
                                        </em>
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="25">
                                <p>
                                    1
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Asli slip gaji terakhir / Surat Keterangan
                                    <strong>
                                        Penghasilan
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                </p>
                            </td>
                        </tr>
                        <tr class="treven">
                            <td valign="top" width="25">
                                <p>
                                    2
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Copy SK pengangkatan
                                    <strong>
                                        Pegawai
                                    </strong>
                                    , SK Calon
                                    <strong>
                                        Pegawai,
                                    </strong>
                                    SK terakhir dan Asli Surat Keterangan Bekerja
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                </p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="25">
                                <p>
                                    3
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Copy rekening tabungan / giro minimal 3 bulan terakhir
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="treven">
                            <td valign="top" width="25">
                                <p>
                                    4
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Copy rekening tabungan / giro perusahaan minimal 6 bulan terakhir
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="25">
                                <p>
                                    5
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Laporan Keuangan Perusahaan 2 periode terakhir
                                    <strong>
                                        *)
                                    </strong>
                                    dan / atau copy bukti / catatan transaksi usaha minimal 3 bulan.
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="treven">
                            <td valign="top" width="25">
                                <p>
                                    6
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Copy Akta Pendirian Perusahaan beserta perubahan dan pengesahannya (SIUP), Tanda Daftar Perusahaan (TDP)
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="25">
                                <p>
                                    7
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Copy izin usaha : Surat Izin Tanda Usaha (SITU), Surat Izin Usaha Perdagangan (SIUP), Tanda Daftar Perusahaan (TDP)
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="treven">
                            <td valign="top" width="25">
                                <p>
                                    8
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Surat Keterangan Usaha **)
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="25">
                                9
                            </td>
                            <td width="371">
                                Surat Izin Lainnya **)
                            </td>
                            <td style="text-align:center;" width="64">
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                        </tr>
                        <tr class="treven">
                            <td valign="top" width="25">
                                10
                            </td>
                            <td width="371">
                                Copy Izin Praktif Profesi
                            </td>
                            <td style="text-align:center;" width="64">
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="25">
                                11
                            </td>
                            <td width="371">
                                Copy Kontrak Kerja Profesi
                            </td>
                            <td style="text-align:center;" width="64">
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                        </tr>
                        <tr class="treven">
                            <td valign="top" width="25">
                                12
                            </td>
                            <td width="371">
                                <em>
                                    Copy
                                </em>
                                SK Pensiun
                            </td>
                            <td style="text-align:center;" width="64">
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td valign="top" width="25">
                                13
                            </td>
                            <td width="371">
                                <em>
                                    Copy
                                </em>
                                KARIP atau yang sejenis
                            </td>
                            <td style="text-align:center;" width="64">
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                            <td style="text-align:center;" width="79">
                            </td>
                        </tr>
                        <tr class="treven">
                            <td width="25">
                                <p>
                                    <strong>
                                        <em>
                                            C
                                        </em>
                                    </strong>
                                </p>
                            </td>
                            <td colspan="5" valign="bottom" width="592">
                                <p>
                                    <strong>
                                        <em>
                                            Dokumen Agunan
                                        </em>
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td width="25">
                                <p>
                                    1
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Copy
                                    <strong>
                                        Sertipikat
                                    </strong>
                                    Tanah obyek
                                    <strong>
                                        Agunan
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="treven">
                            <td width="25">
                                <p>
                                    2
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Copy
                                    <strong>
                                        IMB
                                    </strong>
                                    dan PBB Tahun Terakhir
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                        </tr>
                        <tr class="trodd">
                            <td width="25">
                                <p>
                                    3
                                </p>
                            </td>
                            <td width="371">
                                <p>
                                    Asli
                                    <strong>
                                        Surat Pemesanan Rumah
                                    </strong>
                                    dari
                                    <strong>
                                        Pengembang
                                    </strong>
                                    atau Surat Penawaran
                                    <strong>
                                        Properti
                                    </strong>
                                    dari penjual atau Surat Penawaran lainnya yang dapat dipersamakan/sejenis
                                </p>
                            </td>
                            <td style="text-align:center;" width="64">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <strong>
                                    √
                                </strong>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                            <td style="text-align:center;" width="79">
                                <p>
                                    <strong>
                                        √
                                    </strong>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
              </div>

              </v-card-text>
              <v-card-actions>
                <v-layout row wrap>
                    <v-flex md12 xs12>
                        <v-spacer></v-spacer>
                        <v-checkbox
                            v-model="agree"
                            :rules="[v => !!v || 'You must agree to continue.']"
                            label="Apakah anda setuju dengan ketentuan yang berlaku?"
                            required
                        ></v-checkbox>
                        <v-btn color="warning" to="/">Batal</v-btn>
                        <v-btn 
                        color="primary" 
                        :disabled="!valid"
                        @click="submit"
                        >
                        Setuju
                        </v-btn>
                    </v-flex>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-form>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    agree: false
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


<style scoped>
table th {
  background-color: #0071ab;
  font-weight: bold;
  color: #fff;
  padding: 4px;
}
tbody > tr > td {
  padding: 10px;
  border: 1px solid #efefef;
}
</style>
