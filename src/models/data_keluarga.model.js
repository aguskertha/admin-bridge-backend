
const DataKeluarga = (sequelize, DataTypes) => {
    const DataKeluarga = sequelize.define('data_keluarga', {
        no_kk: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        nama_kepala: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alamat: {
            type: DataTypes.STRING,
            allowNull: false
        },
        no_rt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        no_rw: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kode_pos: {
            type: DataTypes.STRING,
            allowNull: false
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
        oa_nama_pertama: {
            type: DataTypes.STRING,
            allowNull: true
        },
        oa_nama_keluarga: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tipe_kk: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        NIK_kepala_keluarga: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        created_by: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modified_by: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nama_pet_reg: {
            type: DataTypes.STRING,
            allowNull: false
        },
        NIP_pet_reg: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nama_pet_entri: {
            type: DataTypes.STRING,
            allowNull: false
        },
        NIP_pet_entri: {
            type: DataTypes.STRING,
            allowNull: false
        },
        flag_pindah: {
            type: DataTypes.STRING,
            allowNull: true
        },
    });
    return DataKeluarga;
}

module.exports = DataKeluarga;