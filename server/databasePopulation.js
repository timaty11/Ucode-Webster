import { v4 as uuidv4 } from 'uuid';
import process from 'process';

import client from './client.js';
import encrypt from './encrypt.js';


const users = [
  {
    login: 'Admin1',
    password: await encrypt('1234'),
    email: 'admin1@gmail.com',
    phone_number: '+380409318431',
    role: 'admin',
  },
  {
    login: 'User1',
    password: await encrypt('1234'),
    email: 'user1@gmail.com',
    role: 'user',
    phone_number: '+380409318434',
  }
];

const cleanDatabase = async () => {
  try {
    await client('users').del();
    await client('roles').del();
    console.log('/--------------------\\');
    console.log('|database clean (^_^)|');
    console.log('|--------------------|');
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const setRole = async (user_id, role) => {
  const id = uuidv4();
  await client('roles').insert({ id, user_id, role });
};


(
  async () => {
    try {
      await cleanDatabase();
      
      const promisesUsers = users.map(
        async ({ role, content, ...data }) => {
          const id = uuidv4();
          await setRole(id, role);
          return client('users').insert({ ...data, active: true, id });
        }
      );

      await Promise.all(promisesUsers);
      console.log('|     complete :)    |');
      console.log('\\--------------------/');
      process.exit();
    } catch (err) {
      console.error(err);
      process.exit();
    }
  }
)();
