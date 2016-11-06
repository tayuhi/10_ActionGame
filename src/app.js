var size;
//1:地面　2:ブロック　3:プレイヤ　4:ゾンビ 5:こうもり
var level = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 5, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 0, 4, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
];
var tileSize = 96;
var playerPosition; //マップ内のプレイやの位置(ｘ、ｙ)を保持する
var playerSprite; //プレイヤーのスプライト
var leftBtn; //左ボタン
var rightBtn; //右ボタン
var jumpBtn; //ジャンプ
var winSize;
var miss = 0;
var missText;
var koindou;
var koindou2;
var koinkin;
var koinkin2;
var koingin;
var koingin2;

var gameScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        winSize = cc.director.getWinSize();

        var background = new backgroundLayer();
        this.addChild(background);
        var level = new levelLayer();
        this.addChild(level);
        var player = new playerLayer();
        this.addChild(player);
        var enemys = new enemyLayer();
        this.addChild(enemys);

        audioEngine = cc.audioEngine;
        if (!audioEngine.isMusicPlaying()) {
            //audioEngine.playMusic("res/bgm_main.mp3", true);
            audioEngine.playMusic(res.stagebgm, true);

        }

        missText = cc.LabelTTF.create("SCORE: 0", "Arial", "32", cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(missText);
        missText.setPosition(300, 50);
        missText.setScale(1.5);
    }
});


var backgroundLayer = cc.Layer.extend({
    ctor: function() {
        this._super();

        var backgroundSprite = cc.Sprite.create(res.background_png);
        var size = backgroundSprite.getContentSize();
        //console.log(size);
        this.addChild(backgroundSprite);
        //console.log(winSize.width,winSize.height);
        backgroundSprite.setPosition(winSize.width / 2, winSize.height / 2);
        //背景画像を画面の大きさに合わせるためのScaling処理
        backgroundSprite.setScale(winSize.width / size.width, winSize.height / size.height);
        var light = cc.Sprite.create(res.background_light_shafts);
        var size2 = light.getContentSize();
        //console.log(size);
        this.addChild(light);
        //console.log(winSize.width,winSize.height);
        light.setPosition(winSize.width / 2, winSize.height / 2);
        //背景画像を画面の大きさに合わせるためのScaling処理
        light.setScale(winSize.width / size.width, winSize.height / size.height);
        var ground = cc.Sprite.create(res.background_front);
        ground.setPosition(350, 130);
        ground.setScale(1);
        this.addChild(ground, 100);
        var curtain = cc.Sprite.create(res.curtain);
        curtain.setPosition(150, 310);
        curtain.setScale(1.2);
        this.addChild(curtain, 100);
        var curtain2 = cc.Sprite.create(res.curtain);
        curtain2.setPosition(800, 310);
        curtain2.setScale(1.2);
        this.addChild(curtain2, 100);
        curtain2.setFlippedX(true);

        koindou = cc.Sprite.create(res.doukoin1);
        koindou.setPosition(400, 400);
        koindou.setScale(2);
        this.addChild(koindou, 12);
        this.scheduleUpdate();
        koindou.schedule(this.workingkoindou, 0.1);
        koindou.arukiflag = 0;

        koindou2 = cc.Sprite.create(res.doukoin1);
        koindou2.setPosition(300, 400);
        koindou2.setScale(2);
        this.addChild(koindou2, 12);
        this.scheduleUpdate();
        koindou2.schedule(this.workingkoindou2, 0.1);
        koindou2.arukiflag = 0;

        koinkin = cc.Sprite.create(res.kinkoin1);
        koinkin.setPosition(200, 400);
        koinkin.setScale(2);
        this.addChild(koinkin, 12);
        this.scheduleUpdate();
        koinkin.schedule(this.workingkoinkin, 0.1);
        koinkin.arukiflag = 0;

        koinkin2 = cc.Sprite.create(res.kinkoin1);
        koinkin2.setPosition(150, 400);
        koinkin2.setScale(2);
        this.addChild(koinkin2, 12);
        this.scheduleUpdate();
        koinkin2.schedule(this.workingkoinkin2, 0.1);
        koinkin2.arukiflag = 0;

        koingin = cc.Sprite.create(res.ginkoin1);
        koingin.setPosition(500, 400);
        koingin.setScale(2);
        this.addChild(koingin, 12);
        this.scheduleUpdate();
        koingin.schedule(this.workingkoingin, 0.1);
        koingin.arukiflag = 0;

        koingin2 = cc.Sprite.create(res.ginkoin1);
        koingin2.setPosition(600, 400);
        koingin2.setScale(2);
        this.addChild(koingin2, 12);
        this.scheduleUpdate();
        koingin2.schedule(this.workingkoingin2, 0.1);
        koingin2.arukiflag = 0;

    },
    workingkoindou: function(event) {

        if (koindou.arukiflag == 0) {
            koindou.initWithFile(res.doukoin1);
            koindou.arukiflag = 1;
        } else if (koindou.arukiflag == 1) {
            koindou.initWithFile(res.doukoin2);
            koindou.arukiflag = 2;
        } else if (koindou.arukiflag == 2) {
            koindou.initWithFile(res.doukoin3);
            koindou.arukiflag = 3;
        } else if (koindou.arukiflag == 3) {
            koindou.initWithFile(res.doukoin4);
            koindou.arukiflag = 4;
        } else if (koindou.arukiflag == 4) {
            koindou.initWithFile(res.doukoin5);
            koindou.arukiflag = 5;
        } else if (koindou.arukiflag == 5) {
            koindou.initWithFile(res.doukoin6);
            koindou.arukiflag = 6;
        } else if (koindou.arukiflag == 6) {
            koindou.initWithFile(res.doukoin7);
            koindou.arukiflag = 7;
        } else if (koindou.arukiflag == 7) {
            koindou.initWithFile(res.doukoin8);
            koindou.arukiflag = 0;
        }

    },
    workingkoindou2: function(event) {
        if (koindou2.arukiflag == 0) {
            koindou2.initWithFile(res.doukoin1);
            koindou2.arukiflag = 1;
        } else if (koindou2.arukiflag == 1) {
            koindou2.initWithFile(res.doukoin2);
            koindou2.arukiflag = 2;
        } else if (koindou2.arukiflag == 2) {
            koindou2.initWithFile(res.doukoin3);
            koindou2.arukiflag = 3;
        } else if (koindou2.arukiflag == 3) {
            koindou2.initWithFile(res.doukoin4);
            koindou2.arukiflag = 4;
        } else if (koindou2.arukiflag == 4) {
            koindou2.initWithFile(res.doukoin5);
            koindou2.arukiflag = 5;
        } else if (koindou2.arukiflag == 5) {
            koindou2.initWithFile(res.doukoin6);
            koindou2.arukiflag = 6;
        } else if (koindou2.arukiflag == 6) {
            koindou2.initWithFile(res.doukoin7);
            koindou2.arukiflag = 7;
        } else if (koindou2.arukiflag == 7) {
            koindou2.initWithFile(res.doukoin8);
            koindou2.arukiflag = 0;
        }
    },
    workingkoinkin: function(event) {

        if (koinkin.arukiflag == 0) {
            koinkin.initWithFile(res.kinkoin1);
            koinkin.arukiflag = 1;
        } else if (koinkin.arukiflag == 1) {
            koinkin.initWithFile(res.kinkoin2);
            koinkin.arukiflag = 2;
        } else if (koinkin.arukiflag == 2) {
            koinkin.initWithFile(res.kinkoin3);
            koinkin.arukiflag = 3;
        } else if (koinkin.arukiflag == 3) {
            koinkin.initWithFile(res.kinkoin4);
            koinkin.arukiflag = 4;
        } else if (koinkin.arukiflag == 4) {
            koinkin.initWithFile(res.kinkoin5);
            koinkin.arukiflag = 5;
        } else if (koinkin.arukiflag == 5) {
            koinkin.initWithFile(res.kinkoin6);
            koinkin.arukiflag = 6;
        } else if (koinkin.arukiflag == 6) {
            koinkin.initWithFile(res.kinkoin7);
            koinkin.arukiflag = 7;
        } else if (koinkin.arukiflag == 7) {
            koinkin.initWithFile(res.kinkoin8);
            koinkin.arukiflag = 0;
        }

    },
    workingkoinkin2: function(event) {

        if (koinkin2.arukiflag == 0) {
            koinkin2.initWithFile(res.kinkoin1);
            koinkin2.arukiflag = 1;
        } else if (koinkin2.arukiflag == 1) {
            koinkin2.initWithFile(res.kinkoin2);
            koinkin2.arukiflag = 2;
        } else if (koinkin2.arukiflag == 2) {
            koinkin2.initWithFile(res.kinkoin3);
            koinkin2.arukiflag = 3;
        } else if (koinkin2.arukiflag == 3) {
            koinkin2.initWithFile(res.kinkoin4);
            koinkin2.arukiflag = 4;
        } else if (koinkin2.arukiflag == 4) {
            koinkin2.initWithFile(res.kinkoin5);
            koinkin2.arukiflag = 5;
        } else if (koinkin2.arukiflag == 5) {
            koinkin2.initWithFile(res.kinkoin6);
            koinkin2.arukiflag = 6;
        } else if (koinkin2.arukiflag == 6) {
            koinkin2.initWithFile(res.kinkoin7);
            koinkin2.arukiflag = 7;
        } else if (koinkin2.arukiflag == 7) {
            koinkin2.initWithFile(res.kinkoin8);
            koinkin2.arukiflag = 0;
        }

    },

    workingkoingin: function(event) {

        if (koingin.arukiflag == 0) {
            koingin.initWithFile(res.ginkoin1);
            koingin.arukiflag = 1;
        } else if (koingin.arukiflag == 1) {
            koingin.initWithFile(res.ginkoin2);
            koingin.arukiflag = 2;
        } else if (koingin.arukiflag == 2) {
            koingin.initWithFile(res.ginkoin3);
            koingin.arukiflag = 3;
        } else if (koingin.arukiflag == 3) {
            koingin.initWithFile(res.ginkoin4);
            koingin.arukiflag = 4;
        } else if (koingin.arukiflag == 4) {
            koingin.initWithFile(res.ginkoin5);
            koingin.arukiflag = 5;
        } else if (koingin.arukiflag == 5) {
            koingin.initWithFile(res.ginkoin6);
            koingin.arukiflag = 6;
        } else if (koingin.arukiflag == 6) {
            koingin.initWithFile(res.ginkoin7);
            koingin.arukiflag = 7;
        } else if (koingin.arukiflag == 7) {
            koingin.initWithFile(res.ginkoin8);
            koingin.arukiflag = 0;
        }

    },

    workingkoingin2: function(event) {

        if (koingin2.arukiflag == 0) {
            koingin2.initWithFile(res.ginkoin1);
            koingin2.arukiflag = 1;
        } else if (koingin2.arukiflag == 1) {
            koingin2.initWithFile(res.ginkoin2);
            koingin2.arukiflag = 2;
        } else if (koingin2.arukiflag == 2) {
            koingin2.initWithFile(res.ginkoin3);
            koingin2.arukiflag = 3;
        } else if (koingin2.arukiflag == 3) {
            koingin2.initWithFile(res.ginkoin4);
            koingin2.arukiflag = 4;
        } else if (koingin2.arukiflag == 4) {
            koingin2.initWithFile(res.ginkoin5);
            koingin2.arukiflag = 5;
        } else if (koingin2.arukiflag == 5) {
            koingin2.initWithFile(res.ginkoin6);
            koingin2.arukiflag = 6;
        } else if (koingin2.arukiflag == 6) {
            koingin2.initWithFile(res.ginkoin7);
            koingin2.arukiflag = 7;
        } else if (koingin2.arukiflag == 7) {
            koingin2.initWithFile(res.ginkoin8);
            koingin2.arukiflag = 0;
        }

    },

});

var levelLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();
        for (i = 0; i < 7; i++) {　　　　　　
            for (j = 0; j < 10; j++) {
                switch (level[i][j]) {
                    case 1:
                        /*var groundSprite = cc.Sprite.create(res.background_front);
                        groundSprite.setPosition(tileSize / 2 + tileSize * j, 176 * (7 - i) - tileSize / 2);
                        this.addChild(groundSprite);*/
                        break;
                    case 2:
                        var blockSprite = cc.Sprite.create(res.block_png);
                        blockSprite.setPosition(tileSize / 2 + tileSize * j, 96 * (7 - i) - tileSize / 2);
                        this.addChild(blockSprite);
                        break;
                }
            }
        }
    }
});


var player;
var playerLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        player = new Player();
        this.addChild(player);
        //ショッピングカートを操作するレイヤー

        //左ボタン
        leftBtn = cc.Sprite.create(res.leftbutton_png);
        this.addChild(leftBtn, 0);
        leftBtn.setPosition(60, 40);
        leftBtn.setOpacity(128);
        leftBtn.setTag(1);
        //右ボタン
        rightBtn = cc.Sprite.create(res.rightbutton_png);
        this.addChild(rightBtn, 0);
        rightBtn.setPosition(150, 40);
        rightBtn.setOpacity(128);
        rightBtn.setTag(2);

        //ジャンプボタン
        jumpBtn = cc.Sprite.create(res.rightbutton_png);
        jumpBtn.setRotation(-90);
        this.addChild(jumpBtn, 0);
        jumpBtn.setPosition(winSize.width - 60, 40);
        jumpBtn.setOpacity(128);
        jumpBtn.setTag(3);

        //ui
        ui = cc.Sprite.create(res.ui_panels);
        this.addChild(ui, 0);
        ui.setPosition(475, 700);
        ui.setOpacity(250);


        cc.eventManager.addListener(listener, leftBtn);
        cc.eventManager.addListener(listener.clone(), rightBtn);
        cc.eventManager.addListener(listener.clone(), jumpBtn);

        cc.eventManager.addListener(keylistener, this);

    }

});


var Player = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.workingFlag = false;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.jumpFlag = false;
        this.ugokifrag = false;

        for (i = 0; i < 7; i++) {　　　　　　
            for (j = 0; j < 10; j++) {
                if (level[i][j] == 3) {
                    this.setPosition(tileSize / 2 + tileSize * j, 96 * (7 - i) - tileSize / 2);
                    playerPosition = {
                        x: j,
                        y: i
                    };
                }
            }
        }

        //this.initWithFile(res.tati);
        player1 = cc.Sprite.create(res.tati);
        player1.setPosition(0, 0);
        player1.setScale(1);
        this.addChild(player1, 0);
        player1.workingFlag = false;
        this.scheduleUpdate();
        player1.schedule(this.working, 0.2);
        player1.motion = 0;
        player1.mukiflag = 0;
        player1.animeflag = 0;
        player1.kougekiflag = 0;
        player1.tatikougeki = false;
        player1.jump = 0;
        //this.schedule(this.working,0.08);
        /*
          // 2.　SpriteFrame　を利用しての歩行アニメーション
            //スプライトフレームを格納する配列
            var animationframe = [];
            //スプライトフレームを作成
            var frame1 = new cc.SpriteFrame(res.player01_png, cc.rect(0, 0, 96, 96));
            var frame2 = new cc.SpriteFrame(res.player02_png, cc.rect(0, 0, 96, 96));
            //スプライトフレームを配列に登録
            animationframe.push(frame1);
            animationframe.push(frame2);
            //スプライトフレームの配列を連続再生するアニメーションの定義
            var animation = new cc.Animation(animationframe, 0.08);
            //永久ループのアクションを定義
            var action = new cc.RepeatForever(new cc.animate(animation));
            //実行
            this.runAction(action);
        */
        /*
            //３．テクスチャーからスプライトフレームを切り出す方法
                //スプライトフレームを格納する配列
                var texture = cc.textureCache.addImage(res.player_sheet);
                //スプライトフレームを作成
                var frame1 = new cc.SpriteFrame.createWithTexture(texture, cc.rect(0, 0, 96, 96));
                var frame2 = new cc.SpriteFrame.createWithTexture(texture, cc.rect(96, 0, 96, 96));
                //スプライトフレームを配列に登録
                var animationframe = [];
                animationframe.push(frame1);
                animationframe.push(frame2);
                //スプライトフレームの配列を連続再生するアニメーションの定義
                var animation = new cc.Animation(animationframe, 0.08);
                //永久ループのアクションを定義
                var action = new cc.RepeatForever(new cc.animate(animation));
                //実行
                this.runAction(action);
        */

        /*        //↓ここに立ちモーション
                cc.spriteFrameCache.addSpriteFrames(res.player_plist, res.player_sheet);

                // スプライトフレームを取得 player01,player02はplistの中で定義されいいる
                var frame = cc.spriteFrameCache.getSpriteFrame("player05");


                //スプライトフレームを配列に登録
                var animationframe = [];
                animationframe.push(frame);

                //スプライトフレームの配列を連続再生するアニメーションの定義
                var animation = new cc.Animation(animationframe, 0.2);
                //永久ループのアクションを定義
                var action = new cc.RepeatForever(new cc.animate(animation));
                //実行


                //  this.runAction(action);

                this.scheduleUpdate();

                // スプライトシートをキャッシュに登録
                cc.spriteFrameCache.addSpriteFrames(res.player_plist, res.player_sheet);

                // スプライトフレームを取得 player01,player02はplistの中で定義されいいる
                var frame1 = cc.spriteFrameCache.getSpriteFrame("player01");
                var frame2 = cc.spriteFrameCache.getSpriteFrame("player02");
                var frame3 = cc.spriteFrameCache.getSpriteFrame("player03");
                var frame4 = cc.spriteFrameCache.getSpriteFrame("player04");

                //スプライトフレームを配列に登録
                var animationframe2 = [];
                animationframe2.push(frame1);
                animationframe2.push(frame2);
                animationframe2.push(frame3);
                animationframe2.push(frame4);
                //スプライトフレームの配列を連続再生するアニメーションの定義

                var animation2 = new cc.Animation(animationframe2, 0.2);

                //永久ループのアクションを定義
                var action2 = new cc.RepeatForever(new cc.animate(animation2));

                //実行
                //this.initWithFile(res.player_sheet);
                this.runAction(action2);
                if (jumpFlag = false) {
                    miss++
                    missText.setString("SCORE: " + miss);

                }

        */

        /*
        Player.initWithFile(res.player_sheet);
        Player.runAction(action);

        Player.scheduleUpdate();
              */

    },

    working: function(event) {
        if (player1.motion == 2) {
            //this.animeflag = 0;
            player1.workingFlag = (player1.workingFlag == true) ? false : true;
            if (player1.animeflag == 0) {
                player1.initWithFile(res.aruki1);
                player1.animeflag = 1;
            } else if (player1.animeflag == 1) {
                player1.initWithFile(res.aruki2);
                player1.animeflag = 2;
            } else if (player1.animeflag == 2) {
                player1.initWithFile(res.aruki3);
                player1.animeflag = 3;
            } else if (player1.animeflag == 3) {
                player1.initWithFile(res.aruki4);
                player1.animeflag = 0;
            }
            player1.setFlippedX(true);

            //player1.workingFlag = (player1.workingFlag == true) ? false : true;
            /*player1.workingFlag = (player1.workingFlag == false) ? true : false;
            if (player1.workingFlag) player1.initWithFile(res.aruki1);
            else player1.initWithFile(res.aruki2);
            player1.setFlippedX(true);
*/
        }

        if (player1.motion == 1) {

            //player1.workingFlag = (player1.workingFlag == true) ? false : true;
            if (player1.animeflag == 0) {
                player1.initWithFile(res.aruki1);
                player1.animeflag = 1;
            } else if (player1.animeflag == 1) {
                player1.initWithFile(res.aruki2);
                player1.animeflag = 2;
            } else if (player1.animeflag == 2) {
                player1.initWithFile(res.aruki3);
                player1.animeflag = 3;
            } else if (player1.animeflag == 3) {
                player1.initWithFile(res.aruki4);
                player1.animeflag = 0;
            }

            player1.setFlippedX(false);
        }
        if (player1.motion == 0) {
            player1.initWithFile(res.tati);
            if (player1.tatikougeki == true) {
                if (player1.kougekiflag == 0) {
                    player1.initWithFile(res.tatikougeki1);
                    player1.kougekiflag = 1;
                } else if (player1.kougekiflag == 1) {
                    player1.initWithFile(res.tatikougeki2);
                    //  player1.animeflag = 0;
                    player1.tatikougeki = false;
                }
            }
            player1.setFlippedX(false);
        }
        if (player1.motion == 4) {
            player1.initWithFile(res.tati);
            if (player1.tatikougeki == true) {
                if (player1.kougekiflag == 0) {
                    player1.initWithFile(res.tatikougeki1);
                    player1.kougekiflag = 1;
                } else if (player1.kougekiflag == 1) {
                    player1.initWithFile(res.tatikougeki2);
                    //  player1.animeflag = 0;
                    player1.tatikougeki = false;
                }
            }
            player1.setFlippedX(true);
        }
        if (player1.motion == 5) {
            if (player1.jump == 0) {
                player1.initWithFile(res.janp1);
                player1.jump = 1;
            } else if (player1.jump == 1) {
                player.ySpeed = 9;
                player.jumpFlag = true;
                player1.initWithFile(res.janp2);
                player1.jump = 2;
            } else if (player1.jump == 2) {
                player1.initWithFile(res.janp3);
                player1.jump = 3;
            }
        }
        if (player1.motion == 6) {
            if (player1.jump == 0) {
                player1.initWithFile(res.janp1);
                player1.jump = 1;
            } else if (player1.jump == 1) {
                player.ySpeed = 9;
                player.jumpFlag = true;
                player1.initWithFile(res.janp2);
                player1.jump = 2;
            } else if (player1.jump == 2) {
                player1.initWithFile(res.janp3);
                player1.jump = 3;
            }
            player1.setFlippedX(true);
        }
    },

    //移動のため
    update: function(dt) {
        console.log(this.jumpFlag, this.ySpeed);

        if (this.xSpeed > 0) { //スピードが正の値（右方向移動）
            //　向きを判定させる
            player1.setFlippedX(false);
            player1.motion = 1;
            player1.mukiflag = 1;

        }

        if (this.xSpeed < 0) { //スピードが負の値（左方向移動）
            player1.setFlippedX(true);
            player1.motion = 2;
            player1.mukiflag = 2;
        }
        if (this.xSpeed == 0) { //スピードが負の値（左方向移動）
            if (player1.mukiflag == 1) {
                player1.motion = 0;
            }
            if (player1.mukiflag == 2) {
                player1.motion = 4;
            }
            //      if (player1.setFlippedX(false)) { //スピードが正の値（右方向移動）

            //  }
        }
        //プレイヤーを降下させる処理　ジャンプボタンが押されてないときで、プレイヤが空中にある場合
        if (this.jumpFlag == false) {
            if (this.getPosition().y < tileSize * 1.6) this.ySpeed = 0;
            else this.ySpeed = this.ySpeed - 0.1;

        }
        if (this.jumpFlag == true) {
            if (player1.mukiflag == 1) {
                player1.motion = 5;
            }
            if (player1.mukiflag == 2) {
                player1.motion = 6;
            }
        }

        //位置を更新する
        this.setPosition(this.getPosition().x + this.xSpeed, this.getPosition().y + this.ySpeed);

    },



});


//タッチリスナーの実装
var listener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    // swallowTouches: true,

    onTouchBegan: function(touch, event) {
        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var spriteSize = target.getContentSize();
        var spriteRect = cc.rect(0, 0, spriteSize.width, spriteSize.height);
        //タッチした場所が、スプライトの内部に収まっていたら
        if (cc.rectContainsPoint(spriteRect, location)) {
            console.log(target.getTag() + "Btnがタッチされました");

            //タッチしたスプライトが左ボタンだったら
            if (target.getTag()　 == 1) {
                player.xSpeed = -2.5;
                leftBtn.setOpacity(255);
                rightBtn.setOpacity(128);
                player.ugokifrag = true;


            } else {
                //タッチしたスプライトが右ボタンだったら
                if (target.getTag()　 == 2) {
                    player.xSpeed = 2.5;
                    rightBtn.setOpacity(255);
                    leftBtn.setOpacity(128);
                    player.ugokifrag = true;
                }
            }

            //タッチしたスプライトがジャンプボタンだったら
            if (target.getTag()　 == 3) {
                if (player.jumpFlag == false && player.ySpeed == 0) player.ySpeed = 9;
                player.jumpFlag = true;
                jumpBtn.setOpacity(255);

            }
        }
        return true;
    },
    //タッチを止めたときは、移動スピードを0にする
    onTouchEnded: function(touch, event) {
        player.jumpFlag = false;
        player.ugokifrag = false;
        player.xSpeed = 0;
        //player.ySpeed = 0;
        leftBtn.setOpacity(128);
        rightBtn.setOpacity(128);
        jumpBtn.setOpacity(128);
    }


});

//キーボードリスナーの実装
var keylistener = cc.EventListener.create({
    event: cc.EventListener.KEYBOARD,
    // swallowTouches: true,

    onKeyPressed: function(keyCode, event) {
        if (keyCode == 65) { // a-Keyで左に移動
            player.xSpeed = -2.5;
            leftBtn.setOpacity(255);
            rightBtn.setOpacity(128);
        }
        if (keyCode == 68) { // d-Keyで左に移動
            player.xSpeed = 2.5;
            rightBtn.setOpacity(255);
            leftBtn.setOpacity(128);
        }
        if (keyCode == 81) { // e-Keyで攻撃
            //            player1.motion = 5;
            player1.tatikougeki = true;
        }
        if (keyCode == 32 || keyCode == 87) { // スペースキーかwキーでジャンプ
            if (player.jumpFlag == false && player.ySpeed == 0) //player.ySpeed = 9;
                player.jumpFlag = true;
            //    player1.motion = 5;
            jumpBtn.setOpacity(255);
            miss++
            missText.setString("SCORE: " + miss);
        }

        return true;
    },
    onKeyReleased: function(keyCode, event) {
        player1.animeflag = 0;
        player1.kougekiflag = 0;
        player1.jump = 0;
        player1.motion = 0;
        player.jumpFlag = false;
        player.xSpeed = 0;
        //player.ySpeed = 0;
        leftBtn.setOpacity(128);
        rightBtn.setOpacity(128);
        jumpBtn.setOpacity(128);
    },

});
