import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";

interface QuestionProps {
  title: string;
  authorId: string;
}

export class Question extends Entity<QuestionProps> {}
