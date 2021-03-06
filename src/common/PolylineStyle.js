import randomColor from 'randomcolor';

export const lineStyle = {
  strokeWeight: 2,
  lineJoin: 'round',
  lineCap: 'round'
};

export const colorPool = [
  '#FF0000',
  '#000000',
  '#0000FF',
  '#FF00FF',
  '#00FFFF',
  '#00FF00',
  '#FFFF00',
];

export class ColorPool {
  static #colorPool = [];

  static getColor(index) {
    let color = this.#colorPool[index];
    if (color) return color;

    color = randomColor();
    this.#colorPool[index] = color;
    return color;
  }
}