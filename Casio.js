
	class Casio{
	setNumber (Numa,Numb) {
		this.Numa = Number(Numa);
		this.Numb = Number(Numb);
		}
	Sum(){
	  var result = this.Numa+ this.Numb;
	  console.log(result);
	}
	Sub(){
	  var result = this.Numa -this.Numb;
	  console.log(result);
	}
	Mul(){
	  var result = this.Numa * this.Numb;
	  console.log(result);
	}
	Div(){
	  if(this.Numb != 0){
	    var result = this.Numa / this.Numb;
	    console.log(result);
	  }
	  else {
	    console.log("ko dc chia cho 0");
	  }
	}
}
var casio = new Casio();
casio.setNumber("3","3");
casio.Div();
