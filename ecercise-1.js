class Seat {
  constructor(row, seat) {
    this.row = row;
    this.seat = seat;
    this.available = true;
  }

  reserve() {
    if (this.available) {
      console.log(
        `Reservation succesfull: row: ${this.row} - seat: ${this.seat}`
      );
      this.available = false;
    } else {
      console.log(
        `Reservation failed, row: ${this.row} - seat: ${this.seat} is taken`
      );
    }
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
        seats.push(new Seat(i, j));
      }
    }
    return seats;
  }

  showSeatStatus() {
    console.log("Available seats:");
    this.seats.forEach((element) => {
      if (element.available) {
        console.log(`Seat: ${element.row}-${element.seat}`);
      }
    });
  }
}

const cinema = new Cinema(2, 2);
cinema.showSeatStatus();
