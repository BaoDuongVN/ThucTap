import { OnSeederInit, Seeder } from 'nestjs-sequelize-seeder';

@Seeder({
  model: 'User',
  unique: ['username'],
})
export class SeedUser implements OnSeederInit {
  run() {
    const data = [
      {
        username: 'skywalker',
        email: 'skywalker@example.com',
        password: 'force2025',
      },
      {
        username: 'ironman',
        email: 'ironman@example.com',
        password: 'jarvis123',
      },
      { username: 'neo', email: 'neo@example.com', password: 'matrix99' },
      {
        username: 'lara.croft',
        email: 'lara.croft@example.com',
        password: 'tombRaider',
      },
      {
        username: 'sherlock',
        email: 'sherlock@example.com',
        password: 'elementary',
      },
      {
        username: 'batman',
        email: 'batman@example.com',
        password: 'gothamKnight',
      },
      { username: 'goku', email: 'goku@example.com', password: 'kamehameha' },
      {
        username: 'pikachu',
        email: 'pikachu@example.com',
        password: 'thunderbolt',
      },
      { username: 'frodo', email: 'frodo@example.com', password: 'ringBearer' },
      {
        username: 'katniss',
        email: 'katniss@example.com',
        password: 'mockingjay',
      },
      { username: 'vader', email: 'vader@example.com', password: 'darkside' },
      { username: 'thor', email: 'thor@example.com', password: 'mjolnir' },
      { username: 'spock', email: 'spock@example.com', password: 'liveLong' },
      { username: 'link', email: 'link@example.com', password: 'hyrule' },
      {
        username: 'dr.strange',
        email: 'dr.strange@example.com',
        password: 'multiverse',
      },
      {
        username: 'john.wick',
        email: 'john.wick@example.com',
        password: 'babaYaga',
      },
      {
        username: 'tony.stark',
        email: 'tony.stark@example.com',
        password: 'iAmIronman',
      },
      {
        username: 'agent.carter',
        email: 'agent.carter@example.com',
        password: 'shield99',
      },
      {
        username: 'wanda',
        email: 'wanda@example.com',
        password: 'scarletWitch',
      },
      { username: 'geralt', email: 'geralt@example.com', password: 'witcher' },
    ];

    return data;
  }

  everyone(data) {
    data.createdAt = new Date().toISOString();
    data.updatedAt = new Date().toISOString();

    return data;
  }
}
