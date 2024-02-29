import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/question-repository'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}

test('create an question', async () => {
  const Question = new CreateQuestionUseCase(fakeQuestionRepository)

  const { question } = await Question.execute({
    authorId: '1',
    title: 'Nova pergunta',
    content: 'Conteudo da pergunta',
  })

  expect(question.id).toBeTruthy()
})
