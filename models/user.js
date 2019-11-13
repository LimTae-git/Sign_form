'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isID: true
      },
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STIRNG,
      allowNull: false
    },
    Birth: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING
    }
  });
  return user;
};

/*
- email 컬럼을 고유키로 두고, email 양식이 맞는지 확인하는 validate 추가
- 데이터가 이메일 형식이 아닐시, 유효성 검사에 실패해 오류메시지 출력하고
  DB에 저장하지 않는다.
- salt 컬럼은 암호화에 필요
*/
