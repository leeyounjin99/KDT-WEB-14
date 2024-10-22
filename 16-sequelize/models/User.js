/**
 * user 모델을 정의하는 함수
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const User = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "user",
    {
      id: {
        // id int not null primary key auto_increment,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        // userid VARCHAR(20) NOT NULL,
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        // name VARCHAR(10) NOT NULL,
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        // pw VARCHAR(20) NOT NULL
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user", // 실제 DB 테이블 이름 명시, 값을 안주면 param1 + s 값으로 테이블 생성
      freezeTableName: true, // 모델 이름 그대로 테이블 이름 고정
      timestamps: false,
      // - 데이터가 추가되고 수정된 시간을 자동으로 컬럼으로 만들어서 기록함
    }
  );
};

module.exports = User;
