import { ADD_BOOK } from './../actions/addBook';
import { EDIT_BOOK } from './../actions/editBook';
import { REMOVE_BOOK } from './../actions/removeBook';

let initialState = {
    books : [
      {
        title: "The Origin Of Life",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum totam unde porro laborum suscipit alias fuga aliquid soluta fugit eveniet earum sunt placeat iste delectus obcaecati cupiditate iure mollitia qui voluptatum facere, quo nobis ipsum! Dolore et aspernatur, facere. Soluta tempora reiciendis nostrum repellendus accusantium eligendi laboriosam et quos animi, ipsa, harum architecto tenetur eveniet fugit itaque perspiciatis magni illum temporibus. Omnis quaerat laudantium, officiis quis, aspernatur sequi laboriosam animi facilis labore saepe ad voluptatem dicta quae quam similique temporibus corporis molestias magni enim. Sint culpa perferendis cumque quasi delectus consectetur ad incidunt, necessitatibus id corporis ipsum, aliquid quidem ea quia minima omnis consequuntur similique provident eum? Veniam autem, nulla possimus provident laboriosam tenetur maxime dolorem quaerat odit esse assumenda itaque inventore labore cupiditate enim fugiat odio sunt blanditiis, dolores similique, aliquid quo nemo id sed quisquam? Consequatur veniam quam ipsam vel quo similique tempora nisi, ratione repudiandae quas laudantium.",
        author: "Jeffery Miles",
        id: 1
      },
      {
        title: "How To Code Like A Pro",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum totam unde porro laborum suscipit alias fuga aliquid soluta fugit eveniet earum sunt placeat iste delectus obcaecati cupiditate iure mollitia qui voluptatum facere, quo nobis ipsum! Dolore et aspernatur, facere. Soluta tempora reiciendis nostrum repellendus accusantium eligendi laboriosam et quos animi, ipsa, harum architecto tenetur eveniet fugit itaque perspiciatis magni illum temporibus. Omnis quaerat laudantium, officiis quis, aspernatur sequi laboriosam animi facilis labore saepe ad voluptatem dicta quae quam similique temporibus corporis molestias magni enim. Sint culpa perferendis cumque quasi delectus consectetur ad incidunt, necessitatibus id corporis ipsum, aliquid quidem ea quia minima omnis consequuntur similique provident eum? Veniam autem, nulla possimus provident laboriosam tenetur maxime dolorem quaerat odit esse assumenda itaque inventore labore cupiditate enim fugiat odio sunt blanditiis, dolores similique, aliquid quo nemo id sed quisquam? Consequatur veniam quam ipsam vel quo similique tempora nisi, ratione repudiandae quas laudantium.",
        author: "Yoshi Odei",
        id: 2
      },
      {
        title: "Diary of a Programmer",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum totam unde porro laborum suscipit alias fuga aliquid soluta fugit eveniet earum sunt placeat iste delectus obcaecati cupiditate iure mollitia qui voluptatum facere, quo nobis ipsum! Dolore et aspernatur, facere. Soluta tempora reiciendis nostrum repellendus accusantium eligendi laboriosam et quos animi, ipsa, harum architecto tenetur eveniet fugit itaque perspiciatis magni illum temporibus. Omnis quaerat laudantium, officiis quis, aspernatur sequi laboriosam animi facilis labore saepe ad voluptatem dicta quae quam similique temporibus corporis molestias magni enim. Sint culpa perferendis cumque quasi delectus consectetur ad incidunt, necessitatibus id corporis ipsum, aliquid quidem ea quia minima omnis consequuntur similique provident eum? Veniam autem, nulla possimus provident laboriosam tenetur maxime dolorem quaerat odit esse assumenda itaque inventore labore cupiditate enim fugiat odio sunt blanditiis, dolores similique, aliquid quo nemo id sed quisquam? Consequatur veniam quam ipsam vel quo similique tempora nisi, ratione repudiandae quas laudantium.",
        author: "Samuel Ayling",
        id: 3
      },
      {
        title: "Princess In the Big Palace",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum totam unde porro laborum suscipit alias fuga aliquid soluta fugit eveniet earum sunt placeat iste delectus obcaecati cupiditate iure mollitia qui voluptatum facere, quo nobis ipsum! Dolore et aspernatur, facere. Soluta tempora reiciendis nostrum repellendus accusantium eligendi laboriosam et quos animi, ipsa, harum architecto tenetur eveniet fugit itaque perspiciatis magni illum temporibus. Omnis quaerat laudantium, officiis quis, aspernatur sequi laboriosam animi facilis labore saepe ad voluptatem dicta quae quam similique temporibus corporis molestias magni enim. Sint culpa perferendis cumque quasi delectus consectetur ad incidunt, necessitatibus id corporis ipsum, aliquid quidem ea quia minima omnis consequuntur similique provident eum? Veniam autem, nulla possimus provident laboriosam tenetur maxime dolorem quaerat odit esse assumenda itaque inventore labore cupiditate enim fugiat odio sunt blanditiis, dolores similique, aliquid quo nemo id sed quisquam? Consequatur veniam quam ipsam vel quo similique tempora nisi, ratione repudiandae quas laudantium.",
        author: "Margaret Taith",
        id: 4
      },
      {
        title: "Treating Your Alter Ego",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum totam unde porro laborum suscipit alias fuga aliquid soluta fugit eveniet earum sunt placeat iste delectus obcaecati cupiditate iure mollitia qui voluptatum facere, quo nobis ipsum! Dolore et aspernatur, facere. Soluta tempora reiciendis nostrum repellendus accusantium eligendi laboriosam et quos animi, ipsa, harum architecto tenetur eveniet fugit itaque perspiciatis magni illum temporibus. Omnis quaerat laudantium, officiis quis, aspernatur sequi laboriosam animi facilis labore saepe ad voluptatem dicta quae quam similique temporibus corporis molestias magni enim. Sint culpa perferendis cumque quasi delectus consectetur ad incidunt, necessitatibus id corporis ipsum, aliquid quidem ea quia minima omnis consequuntur similique provident eum? Veniam autem, nulla possimus provident laboriosam tenetur maxime dolorem quaerat odit esse assumenda itaque inventore labore cupiditate enim fugiat odio sunt blanditiis, dolores similique, aliquid quo nemo id sed quisquam? Consequatur veniam quam ipsam vel quo similique tempora nisi, ratione repudiandae quas laudantium.",
        author: "Jessica Brandit",
        id: 5
      },
      {
        title: "In the Mind of a Criminal",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum totam unde porro laborum suscipit alias fuga aliquid soluta fugit eveniet earum sunt placeat iste delectus obcaecati cupiditate iure mollitia qui voluptatum facere, quo nobis ipsum! Dolore et aspernatur, facere. Soluta tempora reiciendis nostrum repellendus accusantium eligendi laboriosam et quos animi, ipsa, harum architecto tenetur eveniet fugit itaque perspiciatis magni illum temporibus. Omnis quaerat laudantium, officiis quis, aspernatur sequi laboriosam animi facilis labore saepe ad voluptatem dicta quae quam similique temporibus corporis molestias magni enim. Sint culpa perferendis cumque quasi delectus consectetur ad incidunt, necessitatibus id corporis ipsum, aliquid quidem ea quia minima omnis consequuntur similique provident eum? Veniam autem, nulla possimus provident laboriosam tenetur maxime dolorem quaerat odit esse assumenda itaque inventore labore cupiditate enim fugiat odio sunt blanditiis, dolores similique, aliquid quo nemo id sed quisquam? Consequatur veniam quam ipsam vel quo similique tempora nisi, ratione repudiandae quas laudantium.",
        author: "Joshua Rants",
        id: 6
      },
      {
        title: "Dark Wine Place",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum totam unde porro laborum suscipit alias fuga aliquid soluta fugit eveniet earum sunt placeat iste delectus obcaecati cupiditate iure mollitia qui voluptatum facere, quo nobis ipsum! Dolore et aspernatur, facere. Soluta tempora reiciendis nostrum repellendus accusantium eligendi laboriosam et quos animi, ipsa, harum architecto tenetur eveniet fugit itaque perspiciatis magni illum temporibus. Omnis quaerat laudantium, officiis quis, aspernatur sequi laboriosam animi facilis labore saepe ad voluptatem dicta quae quam similique temporibus corporis molestias magni enim. Sint culpa perferendis cumque quasi delectus consectetur ad incidunt, necessitatibus id corporis ipsum, aliquid quidem ea quia minima omnis consequuntur similique provident eum? Veniam autem, nulla possimus provident laboriosam tenetur maxime dolorem quaerat odit esse assumenda itaque inventore labore cupiditate enim fugiat odio sunt blanditiis, dolores similique, aliquid quo nemo id sed quisquam? Consequatur veniam quam ipsam vel quo similique tempora nisi, ratione repudiandae quas laudantium.",
        author: "Sandra Malone",
        id: 7
      },
      {
        title: "Adventure Of Norgaard",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum totam unde porro laborum suscipit alias fuga aliquid soluta fugit eveniet earum sunt placeat iste delectus obcaecati cupiditate iure mollitia qui voluptatum facere, quo nobis ipsum! Dolore et aspernatur, facere. Soluta tempora reiciendis nostrum repellendus accusantium eligendi laboriosam et quos animi, ipsa, harum architecto tenetur eveniet fugit itaque perspiciatis magni illum temporibus. Omnis quaerat laudantium, officiis quis, aspernatur sequi laboriosam animi facilis labore saepe ad voluptatem dicta quae quam similique temporibus corporis molestias magni enim. Sint culpa perferendis cumque quasi delectus consectetur ad incidunt, necessitatibus id corporis ipsum, aliquid quidem ea quia minima omnis consequuntur similique provident eum? Veniam autem, nulla possimus provident laboriosam tenetur maxime dolorem quaerat odit esse assumenda itaque inventore labore cupiditate enim fugiat odio sunt blanditiis, dolores similique, aliquid quo nemo id sed quisquam? Consequatur veniam quam ipsam vel quo similique tempora nisi, ratione repudiandae quas laudantium.",
        author: "Leslie Jampoh",
        id: 8
      },
    ]
  };

const bookReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_BOOK:
            return ({ books: [ ...state.books, action.payload]});
        case EDIT_BOOK:
            let editedBookList = state.books.map(book => book.id == action.bookId ? action.payload : book);
            return console.log("books", editedBookList);
            // ({ books: [ ...editedBookList ]});
        case REMOVE_BOOK:
            let newBookList = state.books.filter(book => book.id != action.payload);
            return ({ books: [ ...newBookList ]});    
        default:
            return state;    
    }
}

export default bookReducer;