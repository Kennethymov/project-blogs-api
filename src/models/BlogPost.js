const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  },
  {
    underscored: true,
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
    tableName: 'blog_posts'
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      {foreignKey: 'userId', as: 'user'}
      )
  };

  return BlogPost;
};

module.exports = BlogPostModel;