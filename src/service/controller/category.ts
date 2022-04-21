import { Category, Op } from '@/service';
import { Model } from 'sequelize';
import { keys, omit } from 'lodash';
interface IFolder {
  id: string;
  index: number | unknown;
  parentId: string;
  name: string;
  isSystem: boolean;
  open: boolean;
  defaultLanguage: string;
  createdTime: string;
  updatedTIme: string;
  children: IFolder | [];
}

export async function getSystem() {
  return await Category.findAll({
    where: {
      isSystem: 1
    },
    raw: true
  });
}

export async function getFolders() {
  return await Category.findAll({
    where: {
      isSystem: {
        [Op.ne]: 1
      }
    },
    raw: true
  });
}

export async function updateFolders(updateInfo: any, id: string) {
  updateInfo = Object.assign({}, updateInfo, { updatedAt: '111' });

  await Category.update(updateInfo, { where: { id } });
}

export async function bulkUpdateFolders(updateInfo: any) {
  await Category.bulkCreate(updateInfo, {
    updateOnDuplicate: [
      'name',
      'parentId',
      'defaultLanguage',
      'index',
      'open',
      'isSystem',
      'createdTime',
      'updatedTime'
    ]
  });
}

export async function addFolder(info: any) {
  await Category.create(info);
}
