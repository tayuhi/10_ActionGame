var HoverHeight2 = 300; //ホバリング
var RiseHeight2 = 240; //Rise上昇

var enemyslime;

var EnemyLayer2 = cc.Layer.extend({
   ctor: function() {
      this._super();
      enemyslime = new EnemySlime();
      this.addChild(enemyslime);
      //cc.eventManager.addListener(listener, this);

   }

});
var EnemySlime = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile(res.slime_green_frames);
    this.velocity = cc.p(0, 0);
    this.FrameCount = 0;
    this.setScale(1.5);

    for (i = 0; i < 7; i++) {　　　　　　
      for (j = 0; j < 10; j++) {
        if (level[i][j] == 6) {
          this.setPosition(tileSize / 2 + tileSize * j, 96 * (7 - i) - tileSize / 2);
        }
      }
    }

    var animationframe = [];
    //スプライトフレームを格納する配列
    var texture = cc.textureCache.addImage(res.slime_green_frames);
    for (i = 0; i < 2; i++) {
      for (j = 0; j < 2; j++) {
        //スプライトフレームを作成
        var frame = new cc.SpriteFrame.createWithTexture(texture, cc.rect(160 * j, 96 * i, 160, 96));
        //スプライトフレームを配列に登録
        animationframe.push(frame);
      }
    }
    //スプライトフレームの配列を連続再生するアニメーションの定義
    var animation = new cc.Animation(animationframe, 0.08);
    //永久ループのアクションを定義
    var action = new cc.RepeatForever(new cc.animate(animation));
    //実行
    this.runAction(action);

    this.scheduleUpdate();


//    this.scheduleUpdate();

  },
  /*workinggreenslime2: function(event) {
      var pause = setTimeout(function() {

          if (titleslime2.arukiflag == 0) {
              titleslime2.initWithFile(res.greenslime13);
              titleslime2.arukiflag = 1;
          } else if (titleslime2.arukiflag == 1) {
              titleslime2.initWithFile(res.greenslime14);
              titleslime2.arukiflag = 2;
          } else if (titleslime2.arukiflag == 2) {
              titleslime2.initWithFile(res.greenslime15);
              titleslime2.arukiflag = 3;
          } else if (titleslime2.arukiflag == 3) {
              titleslime2.initWithFile(res.greenslime16);
              titleslime2.arukiflag = 4;
          } else if (titleslime2.arukiflag == 4) {
              titleslime2.initWithFile(res.greenslime9);
              titleslime2.arukiflag = 5;
          } else if (titleslime2.arukiflag == 5) {
              titleslime2.initWithFile(res.greenslime10);
              titleslime2.arukiflag = 6;
          } else if (titleslime2.arukiflag == 6) {
              titleslime2.initWithFile(res.greenslime11);
              titleslime2.arukiflag = 7;
          } else if (titleslime2.arukiflag == 7) {
              titleslime2.initWithFile(res.greenslime12);
              titleslime2.arukiflag = 8;
          } else if (titleslime2.arukiflag == 8) {
              titleslime2.initWithFile(res.greenslime5);
              titleslime2.arukiflag = 9;
          } else if (titleslime2.arukiflag == 9) {
              titleslime2.initWithFile(res.greenslime6);
              titleslime2.arukiflag = 10;
          } else if (titleslime2.arukiflag == 10) {
              titleslime2.initWithFile(res.greenslime7);
              titleslime2.arukiflag = 11;
          } else if (titleslime2.arukiflag == 11) {
              titleslime2.initWithFile(res.greenslime8);
              titleslime2.arukiflag = 12;
          } else if (titleslime2.arukiflag == 12) {
              titleslime2.initWithFile(res.greenslime1);
              titleslime2.arukiflag = 13;
          } else if (titleslime2.arukiflag == 13) {
              titleslime2.initWithFile(res.greenslime2);
              titleslime2.arukiflag = 14;
          } else if (titleslime2.arukiflag == 14) {
              titleslime2.initWithFile(res.greenslime3);
              titleslime2.arukiflag = 15;
          } else if (titleslime2.arukiflag == 15) {
              titleslime2.initWithFile(res.greenslime4);
              titleslime2.arukiflag = 0;
          }
      }, 100);
  },
*/
  update: function(dt) {
    this.FrameCount++;
    var playerBoundingBox = player.getBoundingBox();
        var batBoundingBox = this.getBoundingBox();
        //rectIntersectsRectは２つの矩形が交わっているかチェックする
        if (cc.rectIntersectsRect(playerBoundingBox, batBoundingBox) && player.invulnerability == 0 ) {
          miss++;
          missText.setString("SCORE: " + miss);

         //hp.setScale(0.6,1);
         //hp.setPosition(0,1);
         //player1.setOpacity(1000);
         player.invulnerability = 300;
        }
    //4フレームに1回　こうもりの移動計算する
    if (this.FrameCount % 4 == 0) {
      //プレイヤーの位置をこうもりの位置の差を計算
      var offset_x = player.getPosition().x - this.getPosition().x;
      var offset_y = player.getPosition().y - this.getPosition().y;
      //offset_x = offset_x*Math.sin(offset_x);
      //蝙蝠のｘ移動速度をプレイヤとこうもりの間の距離の0.05倍にする
      var velocity_x = lerp(this.velocity.x, offset_x, 0.005);
      var velocity_y = this.velocity.y;
      //フォバリング高度より上なら下降させる。　降下下限高度より下にいたら、上昇させる
      if (this.getPosition().y > HoverHeight2) velocity_y += -0.035;
      if (this.getPosition().y < RiseHeight2) velocity_y += 0.05;
      //プレイヤーの位置よりできるだけ下にならないように
      if (this.getPosition().y < player.y + 20) velocity_y += 0.05;
      //8の字旋回軌道をsin計算で適当に補正
      velocity_y += 0.075 * Math.sin(this.FrameCount * 0.015) * Math.sin(this.FrameCount * 0.04);

      //console.log(velocity_x, velocity_y);

      this.velocity.x = velocity_x;
      this.velocity.y = velocity_y;

      //  console.log(MoveDirection, this.velocity.x, offset.x);
      if (this.velocity.x <= 0)
        this.setFlippedX(true);
      if (this.velocity.x > 0)
        this.setFlippedX(false);

      this.setPosition(this.getPosition().x + this.velocity.x, this.getPosition().y + this.velocity.y);
    }

  }



});
//始点、終点、の間で 0～1.0の割合の位置を返す関数
function lerp(fStart, fEnd, fPercent) {
  return fStart + ((fEnd - fStart) * fPercent);
}
