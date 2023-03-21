const isLikedByUser = (likedBy, session) => {
  if (session === null) {
    return
  }

  let isLike = false

  likedBy.forEach((element) => {
    if (element.user.id === session.userId) {
      isLike = true

      return isLike
    }
  })

  return isLike
}

export default isLikedByUser
