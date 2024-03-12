import { AnswersRepository } from '../repositories/answers-repository'

interface DeleteanswerUseCaseRequest {
  authorId: string
  answerId: string
}

interface DeleteAnswerUseCaseResponse {}

export class DeleteAnswerUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    answerId,
    authorId,
  }: DeleteanswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)
    
    if (!answer) {
      throw new Error('answer not found')
    }

    if(authorId != answer.authorId.toString()) {
      throw new Error('not allowed')
    }
    
    await this.answerRepository.delete(answer)

    return {}
  }
}
