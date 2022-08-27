import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { Article } from './interfaces/article.interface';

const article: Article = {
  title: 'This is a fake article',
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad aspernatur deserunt amet molestias officia
  dolorum velit, sint facilis quae eos reprehenderit ipsum eaque, rem sapiente itaque iusto ratione accusamus.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci laboriosam explicabo, dolore excepturi
  vitae ab ex consequatur totam sint quas accusantium enim laudantium consequuntur officiis dolorem in earum
  asperiores.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus adipisci voluptatum quisquam accusantium modi
  doloribus vitae itaque earum obcaecati provident illo repellendus, iste a autem quaerat. Reprehenderit, veniam
  inventore!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, eos, voluptatibus laudantium molestias sequi omnis
  autem quia quidem repellat libero, suscipit maxime rem vel alias doloremque accusantium non tenetur eum!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore, ab, fuga eaque recusandae tempora nobis
  accusantium obcaecati numquam, similique sequi doloribus quae. Ex dolore, ullam magni quibusdam tempore tenetur.


  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae omnis ducimus suscipit, praesentium quas sapiente
  mollitia ipsa voluptate dolorum fugit sequi provident quibusdam maiores porro cumque, sed sint unde! Ad.
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste fuga tempore voluptatibus eius consequuntur debitis
  ipsam laboriosam ducimus culpa, eaque dolor dolores! Maxime omnis non assumenda, eius architecto amet eaque.
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur deserunt ut a voluptates quae unde ipsam?
  Ipsam quibusdam quos ratione optio accusantium, placeat voluptas beatae dignissimos maxime, quidem cumque
  asperiores.

  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nesciunt totam ab quo itaque! Quod numquam
  voluptate, deleniti sequi ab consectetur repudiandae. Minus ipsum nihil quae similique id cumque quaerat?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate excepturi nesciunt voluptatum. Repudiandae
  doloribus obcaecati maxime quibusdam perferendis et ipsam, nam ab autem, odit fugiat incidunt dolorum quasi
  laudantium rem.`,
  author: 'lorem'
}

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<Article> {
  resolve(): Observable<Article> {
    return of(article).pipe(
      delay(2000)
    );
  }
}
