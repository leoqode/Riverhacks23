module.exports = (sequelize, Sequelize) => {
  
  const Post = sequelize.define('post', {
    
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    body: {
      type: Sequelize.STRING,
      allowNull: false
    },
    mood: {
      type: Sequelize.STRING,
      allowNull: false
    }

  });  
  
  return Post;
};
