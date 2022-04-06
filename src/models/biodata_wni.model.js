
const BiodataWNI = (sequelize, DataTypes) => {
    const BiodataWNI = sequelize.define('biodata_wni', {
        NIK: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        no_paspor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tgl_akh_paspor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nama_lengkap: {
            type: DataTypes.STRING,
            allowNull: false
        },
        jenis_kelamin: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tempat_lahir: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tanggal_lahir: {
            type: DataTypes.STRING,
            allowNull: false
        },
        akta_lahir: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        no_akta_lahir: {
            type: DataTypes.STRING,
            allowNull: true
        },
        golongan_darah: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        agama: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status_kawin: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        akta_kawin: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        no_akta_kawin: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tanggal_kawin: {
            type: DataTypes.STRING,
            allowNull: true
        },
        akta_cerai: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        no_akta_cerai: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tanggal_cerai: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status_hubungan_keluarga: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pddk_akh: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        jenis_pekerjaan: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        NIK_ibu: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nama_lengkap_ibu: {
            type: DataTypes.STRING,
            allowNull: false
        },
        NIK_ayah: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nama_lengkap_ayah: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nama_pet_reg: {
            type: DataTypes.STRING,
            allowNull: false
        },
        NIP_pet_reg: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nama_pet_entri: {
            type: DataTypes.STRING,
            allowNull: false
        },
        NIP_pet_entri: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tanggal_entri: {
            type: DataTypes.STRING,
            allowNull: false
        },
        no_kk: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        no_prop: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        no_kab: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        no_kec: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        no_kel: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tanggal_ubah: {
            type: DataTypes.STRING,
            allowNull: false
        },
        keterangan_agama: {
            type: DataTypes.STRING,
            allowNull: true
        },
        kebangsaan: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gelar: {
            type: DataTypes.STRING,
            allowNull: true
        },
        keterangan_pekerjaan: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gelar_agama: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gelar_akademis: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gelar_bangsawan: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deskripsi_pekerjaan: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deskripsi_kepercayaan: {
            type: DataTypes.STRING,
            allowNull: true
        },
        flag_status: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_by: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modified_by: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    });
    return BiodataWNI;
}

module.exports = BiodataWNI;