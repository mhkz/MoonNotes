import { STRING, INTEGER, TEXT } from 'sequelize';
import Dbc from './initSequelize';
import { ICategoryModel } from '@/types/category';

const sequelize = Dbc.sequelize;
export default sequelize.define<ICategoryModel>(
  'Category',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: STRING,
      field: 'id'
    },
    parentId: {
      allowNull: true,
      type: STRING,
      field: 'parent_id'
    },
    index: {
      allowNull: true,
      type: INTEGER,
      field: 'index'
    },
    name: {
      allowNull: true,
      type: STRING,
      field: 'name'
    },
    open: {
      allowNull: true,
      type: INTEGER,
      field: 'open'
    },
    defaultLanguage: {
      allowNull: true,
      type: TEXT,
      field: 'default_language'
    },
    isSystem: {
      allowNull: true,
      type: INTEGER,
      field: 'is_system'
    },
    createdTime: {
      type: STRING,
      allowNull: true,
      field: 'created_time'
    },
    updatedTime: {
      type: STRING,
      allowNull: true,
      field: 'updated_time'
    }
  },
  {
    tableName: 'category',
    timestamps: false
  }
);
