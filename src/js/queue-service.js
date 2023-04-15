//приклад використання

// Імпортужмо в index.js

// import QueueService from './js/queue-service';

// Створюємо об'єкт

// myQueue = new QueueService();

// myQueue.removeQueue(); // Очищуємо чергу
// myQueue.setQueue({ id: 123, title: 'More' }); // Додаємо дані фільму в чергу
// myQueue.setQueue({ id: 124, title: 'More' }); // Додаємо дані фільму в чергу
// myQueue.removeFromQueue(123); // Видаляємо фільм з черги за id
// myQueue.removeFromQueue(124); // Видаляємо фільм з черги за id
// myQueue.setQueue({ id: 234, title: 'Іndiana Johnes' }); // Додаємо дані фільму в чергу

// ------------------- Реалізація класу QueueService --------------------------

QUEUE = 'queue';
export default class QueueService {
  storage = localStorage.getItem(QUEUE);

  getAllQueue() {
    if (this.storage) {
      return JSON.parse(this.storage);
    }
  }

  setQueue(movie) {
    if (this.storage) {
      // Читаємо з localStorage d movie
      const movies = this.getAllQueue();
      //Перевіряємо, чи є вже такий об'єкт в черзі
      if (!movies.some(obj => obj.id === movie.id)) {
        // Додаємо об'єкт до масиву movies
        movies.push(movie);
        // Додаємо оновлений масив до localStorage
        localStorage.setItem(QUEUE, JSON.stringify(movies));
      }
    } else {
      localStorage.setItem(QUEUE, JSON.stringify([movie]));
    }
  }

  getQueueById(id) {
    if (this.storage) {
      return this.getAllQueue().filter(e => e.id === id);
    }
  }

  removeFromQueue(id) {
    if (this.storage) {
      const newMovies = this.getAllQueue().filter(obj => obj.id !== id);
      localStorage.setItem(QUEUE, JSON.stringify(newMovies));
    }
  }

  removeQueue() {
    localStorage.removeItem(QUEUE);
  }
}
