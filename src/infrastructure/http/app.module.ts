import { Module } from '@nestjs/common';
import { HealthController } from 'src/presentation/controllers/health.controller';

@Module({
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
