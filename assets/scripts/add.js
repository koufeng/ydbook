class Create {
  constructor () {

  }
  fn () {
    console.log('es6语法初始化')
    $('#test').click(yd.throttle(function() {
      fetch()
    }, 1000))
  }
}
export default Create;