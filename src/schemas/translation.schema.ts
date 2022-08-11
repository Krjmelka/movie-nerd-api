import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Translation {
  @Prop()
  locale: string;

  @Prop()
  lang: string;

  @Prop()
  lang_eng: string;

  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const TranslationSchema = SchemaFactory.createForClass(Translation);
