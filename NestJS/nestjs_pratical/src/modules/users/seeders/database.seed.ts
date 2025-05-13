import { OnSeederInit, Seeder } from 'nestjs-sequelize-seeder';
import { User } from '../entities/user.entity';

@Seeder({
  model: 'User',
  unique: ['username'],
})
export class SeedUser implements OnSeederInit {
  run() {
    const data = [
      { username: 'skywalker', password: 'force2025' },
      { username: 'ironman', password: 'jarvis123' },
      { username: 'neo', password: 'matrix99' },
      { username: 'lara.croft', password: 'tombRaider' },
      { username: 'sherlock', password: 'elementary' },
      { username: 'batman', password: 'gothamKnight' },
      { username: 'goku', password: 'kamehameha' },
      { username: 'pikachu', password: 'thunderbolt' },
      { username: 'frodo', password: 'ringBearer' },
      { username: 'katniss', password: 'mockingjay' },
      { username: 'vader', password: 'darkside' },
      { username: 'thor', password: 'mjolnir' },
      { username: 'spock', password: 'liveLong' },
      { username: 'link', password: 'hyrule' },
      { username: 'dr.strange', password: 'multiverse' },
      { username: 'john.wick', password: 'babaYaga' },
      { username: 'tony.stark', password: 'iAmIronman' },
      { username: 'agent.carter', password: 'shield99' },
      { username: 'wanda', password: 'scarletWitch' },
      { username: 'geralt', password: 'witcher' },
    ];
    return data;
  }

  everyone(data) {
      data.createdAt = new Date().toISOString();
      data.updatedAt = new Date().toISOString();

      return data;
   }
}
