import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Person } from './person.schema';
import { Translation, TranslationSchema } from './translation.schema';

@Schema()
export class TVSeries {
  @Prop()
  uid: string;

  @Prop()
  imdb_id: string;

  @Prop()
  poster_path: string;

  @Prop()
  images: string[];

  @Prop()
  genre_ids: string[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }] })
  actors: Person[];

  @Prop({ type: TranslationSchema })
  translations: Translation[];
}

export type TVSeriesDocument = TVSeries & mongoose.Document;

export const TVSeriesSchema = SchemaFactory.createForClass(TVSeries);
