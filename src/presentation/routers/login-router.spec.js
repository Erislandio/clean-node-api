class LoginRouter {
  route () {

  }
}

describe('Login router', () => {
  test('Should return 400 if no email is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpdResponse = sut.route(httpRequest)
    expect(httpdResponse.statusCode).toBe(400)
  })
})
