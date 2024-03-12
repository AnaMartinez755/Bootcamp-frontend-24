// Individual seat
class Seat {
  constructor(row, seatsInRow, available) {
    this.row = row;
    this.seatsInRow = seatsInRow;
    this.available = available;
  }
}

class Cinema {
  constructor(rows, seatsInRow) {
    this.rows = rows;
    this.seatsInRow = seatsInRow;
    this.seats = this.createSeats();
  }

  createSeats() {
    const seats = [];
    for (let i = 1; i <= this.rows; i++) {
      for (let j = 1; j <= this.seatsInRow; j++) {
        seats.push(new Seat(i, j, true));
      }
    }
    return seats;
  }

  showSeatStatus() {
    console.log("Available seats:");
    this.seats.forEach((element) => {
      if (element.available) {
        console.log(`Seat: ${element.row}-${element.seatsInRow} available`);
      } else {
        console.log(`Seat: ${element.row}-${element.seatsInRow} reserved`);
      }
    });
  }
  reserve(row, seatNumber) {
    console.log("Reserved:");
    const seatIndex = this.seats.findIndex((element) => {
      return element.row === row && element.seatsInRow === seatNumber;
    });
    if (seatIndex !== -1 && this.seats[seatIndex].available) {
      this.seats[seatIndex].available = false;
      console.log(
        `Seat: ${this.seats[seatIndex].row}-${this.seats[seatIndex].seatsInRow} reserved`
      );
    }
  }
}

const cinema = new Cinema(2, 2);
cinema.showSeatStatus();
cinema.reserve(1, 1);
cinema.showSeatStatus();
