import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Person } from './person.schema';
import { Translation, TranslationSchema } from './translation.schema';

@Schema()
export class Movie {
  @Prop()
  uid: string;

  @Prop()
  imdb_id: string;

  @Prop()
  title: string;

  @Prop()
  poster_path: string;

  @Prop()
  images: string[];

  @Prop()
  genre_ids: string[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }] })
  actors: Person[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Person' })
  director: Person;

  @Prop({ type: [TranslationSchema] })
  translations: Translation[];
}

export type MovieDocument = Movie & mongoose.Document;

export const MovieSchema = SchemaFactory.createForClass(Movie);
