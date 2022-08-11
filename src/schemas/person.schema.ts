import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Movie } from './movie.schema';
import { TVSeries } from './tvSeries.schema';

@Schema()
export class Person {
  @Prop()
  uid: string;

  @Prop()
  name: string;

  @Prop()
  profile_path: string;

  @Prop()
  gender: 1 | 2;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }] })
  acting_movies: Movie[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }] })
  directing: Movie[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TVSeries' }] })
  acting_tv_series: TVSeries[];
}

export type PersonDocument = Person & mongoose.Document;

export const PersonSchema = SchemaFactory.createForClass(Person);
