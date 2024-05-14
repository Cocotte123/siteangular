import { Injectable } from '@angular/core';
import {Data} from "../services/data";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: Data[] = [
  {
    id: "1",
    name:"accueil",
    titre: "Page d'accueil",
    titre2: "Qui sommes-nous?",
    texte: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ex voluptates nulla ab aperiam at provident excepturi autem iure nisi tempora assumenda harum natus atque, ut fuga magnam repellat nam? Ratione excepturi, rem minima facere dolor mollitia exercitationem nihil enim distinctio similique accusamus, ex deleniti. Adipisci totam aperiam voluptatum vel, voluptas velit facere maiores distinctio temporibus odio quos minus hic quidem doloremque enim eum quis nulla odit asperiores, atque praesentium, repellat architecto ducimus consectetur? Nemo doloremque odit vitae molestias voluptatum. Cupiditate dolorem consequuntur totam architecto autem ea cum in quia sequi accusamus minus nesciunt praesentium voluptatem fuga doloribus optio aliquid excepturi delectus, officiis consectetur suscipit quo amet. Alias, consequuntur quaerat nulla non laudantium error nam illum obcaecati voluptatum blanditiis, et iure molestiae eius enim assumenda iusto mollitia minus veniam voluptate. Nisi distinctio excepturi rerum praesentium sunt unde quidem perspiciatis debitis. Alias sit harum neque officia, ducimus soluta veritatis consequuntur amet, ab, earum aperiam architecto error. Sint quos minima soluta porro quibusdam totam nulla nobis omnis est, laborum et consequuntur nostrum ea dicta tempore, dolorem voluptas iure! Aperiam, temporibus asperiores corporis perspiciatis reiciendis quam! Molestias, reiciendis. Nam, optio adipisci reiciendis, assumenda facilis quos sapiente accusamus et veritatis, rerum neque quae tenetur!"
  },
  {
    id: "2",
    name: "aPropos",
    titre: "A propos",
    titre2: "Notre histoire",
    texte: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ex voluptates nulla ab aperiam at provident excepturi autem iure nisi tempora assumenda harum natus atque, ut fuga magnam repellat nam? Ratione excepturi, rem minima facere dolor mollitia exercitationem nihil enim distinctio similique accusamus, ex deleniti. Adipisci totam aperiam voluptatum vel, voluptas velit facere maiores distinctio temporibus odio quos minus hic quidem doloremque enim eum quis nulla odit asperiores, atque praesentium, repellat architecto ducimus consectetur? Nemo doloremque odit vitae molestias voluptatum. Cupiditate dolorem consequuntur totam architecto autem ea cum in quia sequi accusamus minus nesciunt praesentium voluptatem fuga doloribus optio aliquid excepturi delectus, officiis consectetur suscipit quo amet. Alias, consequuntur quaerat nulla non laudantium error nam illum obcaecati voluptatum blanditiis, et iure molestiae eius enim assumenda iusto mollitia minus veniam voluptate. Nisi distinctio excepturi rerum praesentium sunt unde quidem perspiciatis debitis. Alias sit harum neque officia, ducimus soluta veritatis consequuntur amet, ab, earum aperiam architecto error. Sint quos minima soluta porro quibusdam totam nulla nobis omnis est, laborum et consequuntur nostrum ea dicta tempore, dolorem voluptas iure! Aperiam, temporibus asperiores corporis perspiciatis reiciendis quam! Molestias, reiciendis. Nam, optio adipisci reiciendis, assumenda facilis quos sapiente accusamus et veritatis, rerum neque quae tenetur!"
  }
  ]

  public getDataById(id: String): Data | undefined {
    return this.data.find(data => data.id === id);
  }
  constructor() { }
}
