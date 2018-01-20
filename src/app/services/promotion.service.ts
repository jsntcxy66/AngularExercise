import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getDishes(): Promotion[] {
    return PROMOTIONS;
  }

  getDish(id: number): Promotion {
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedDish(): Promotion {
    return PROMOTIONS.filter((promo) => (promo.featured))[0];
  }
}