import { cardModel } from '~/models/cardModel'
import { columnModel } from '~/models/columnModel'

const createNew = async (reqBody) => {
  try {
    // Xử lý logic dữ liệu tùy đặc thù dự án
    const newCard = {
      ...reqBody
    }
    const createdCard = await cardModel.createNew(newCard)
    const getNewCard = await cardModel.findOneById(createdCard.insertedId)

    if (getNewCard) {
      // Cập nhật mảng cardOrderIds trong collection columns
      await columnModel.pushCardOrderIds(getNewCard)
    }

    return getNewCard
  } catch (error) { throw error }
}

const update = async (cardId, reqBody) => {
  try {
    const updatedData = {
      ...reqBody,
      updatedAt: new Date() // Cập nhật trường updatedAt mỗi khi có thay đổi
    }
    const updatedCard = await cardModel.update(cardId, updatedData)


    return updatedCard
  } catch (error) { throw error }
}

export const cardService = {
  createNew,
  update
}