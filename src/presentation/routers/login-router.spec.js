class LoginRouter {
  route (httpRequest) {
    if (!httpRequest || !httpRequest.body) {
      return {
        statusCode: 500
      }
    }

    const { email, password } = httpRequest.body

    if (!email || !password) {
      return {
        statusCode: 400
      }
    }
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

  test('Should return 500 if no httpRequest is provided', () => {
    const sut = new LoginRouter()
    const httpdResponse = sut.route()
    expect(httpdResponse.statusCode).toBe(500)
  })

  test('Should return 500 if httpRequest has no body', () => {
    const sut = new LoginRouter()
    const httpRequest = {}
    const httpdResponse = sut.route(httpRequest)
    expect(httpdResponse.statusCode).toBe(500)
  })

  test('Should return 400 if no password is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        email: 'teste@teste.com'
      }
    }
    const httpdResponse = sut.route(httpRequest)
    expect(httpdResponse.statusCode).toBe(400)
  })
})
