var ThirdLayer = cc.Layer.extend({

    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        //音楽再生エンジン
        audioEngine = cc.audioEngine;
        if (!audioEngine.isMusicPlaying()) {
            //audioEngine.playMusic("res/bgm_main.mp3", true);
            audioEngine.playMusic(res.titlebgm, true);
            var pause = setTimeout(function() {
                audioEngine.playEffect(res.opken,false);
            }, 7000);
            var pause = setTimeout(function() {
                audioEngine.playEffect(res.opvoice);
            }, 34000);
            var pause = setTimeout(function() {
                audioEngine.playEffect(res.opvoice);
            }, 29000);
            var pause = setTimeout(function() {
                audioEngine.playEffect(res.opsakebi);
            }, 33000);
        }

        //画像
        var sprite = cc.Sprite.create(res.title);
        /*sprite.setPosition(size.width / 1.5, size.height / 2);
        sprite.setScale(10, 5);*/
        sprite.setPosition(size.width / 2, size.height / 0.7);
        sprite.setScale(1.00012);
        this.addChild(sprite, 2);
        var moveAction = cc.MoveTo.create(7, new cc.Point(size.width / 2, size.height / 1.4));
        sprite.runAction(moveAction);

        light = cc.Sprite.create(res.toumei);
        light.setPosition(300, 350);
        light.setScale(2);
        this.addChild(light, 1);
        this.scheduleUpdate();
        light.schedule(this.working, 0.1);
        light.animeflag = 0;

        light2 = cc.Sprite.create(res.toumei);
        light2.setPosition(200, 350);
        light2.setScale(2);
        this.addChild(light2, 1);
        this.scheduleUpdate();
        light2.schedule(this.working2, 0.1);
        light2.animeflag2 = 0;

        light3 = cc.Sprite.create(res.toumei);
        light3.setPosition(400, 350);
        light3.setScale(2);
        this.addChild(light3, 1);
        this.scheduleUpdate();
        light3.schedule(this.working3, 0.1);
        light3.animeflag3 = 0;

        light4 = cc.Sprite.create(res.toumei);
        light4.setPosition(500, 350);
        light4.setScale(2);
        this.addChild(light4, 1);
        this.scheduleUpdate();
        light4.schedule(this.working4, 0.1);
        light4.animeflag4 = 0;

        light5 = cc.Sprite.create(res.toumei);
        light5.setPosition(600, 350);
        light5.setScale(2);
        this.addChild(light5, 1);
        this.scheduleUpdate();
        light5.schedule(this.working5, 0.1);
        light5.animeflag5 = 0;

        light6 = cc.Sprite.create(res.toumei);
        light6.setPosition(700, 350);
        light6.setScale(2);
        this.addChild(light6, 1);
        this.scheduleUpdate();
        light6.schedule(this.working6, 0.1);
        light6.animeflag6 = 0;

        light7 = cc.Sprite.create(res.toumei);
        light7.setPosition(800, 350);
        light7.setScale(2);
        this.addChild(light7, 1);
        this.scheduleUpdate();
        light7.schedule(this.working7, 0.1);
        light7.animeflag7 = 0;

        light8 = cc.Sprite.create(res.toumei);
        light8.setPosition(500, 500);
        light8.setScale(6, 6);
        this.addChild(light8, 1);
        this.scheduleUpdate();
        light8.schedule(this.working8, 0.15);
        light8.animeflag8 = 0;
        //light8.setFlippedY(true);
        lightniji = cc.Sprite.create(res.toumei);
        lightniji.setPosition(500, 500);
        lightniji.setScale(6, 6);
        this.addChild(lightniji, 1);
        this.scheduleUpdate();
        lightniji.schedule(this.workingniji, 0.15);
        lightniji.animeflag8 = 0;
        //lightniji.setFlippedY(true);


        light0 = cc.Sprite.create(res.toumei);
        light0.setPosition(700, 600);
        light0.setScale(4);
        this.addChild(light0, 1);
        this.scheduleUpdate();
        light0.schedule(this.workinglight, 0.1);
        light0.animeflag8 = 0;



        ojisan = cc.Sprite.create(res.tati);
        ojisan.setPosition(-100, 100);
        ojisan.setScale(1);
        this.addChild(ojisan, 1);
        this.scheduleUpdate();
        ojisan.schedule(this.workingoji, 0.2);
        ojisan.arukiflag = 0;
        ojisan.glassflag = 0;
        ojisan.glass = 0;
        var pause = setTimeout(function() {

            var moveAction = cc.MoveTo.create(7, new cc.Point(600, 100));
            ojisan.runAction(moveAction);
        }, 7000);

        var pause2 = setTimeout(function() {
            var moveAction2 = cc.MoveTo.create(0.5, new cc.Point(600, 300));
            ojisan.runAction(moveAction2);
        }, 15400);
        var pause2 = setTimeout(function() {
            var moveAction2 = cc.MoveTo.create(0.5, new cc.Point(600, 100));
            ojisan.runAction(moveAction2);
        }, 16200);
        var pause2 = setTimeout(function() {
            var moveAction2 = cc.MoveTo.create(0.1, new cc.Point(600, 300));
            ojisan.runAction(moveAction2);
        }, 30000);
        var pause2 = setTimeout(function() {
            var moveAction2 = cc.MoveTo.create(0.1, new cc.Point(600, 100));
            ojisan.runAction(moveAction2);
        }, 30500);
        var pause2 = setTimeout(function() {
            var moveAction2 = cc.MoveTo.create(1, new cc.Point(1200, 100));
            ojisan.runAction(moveAction2);
        }, 33000);
        titleback = cc.Sprite.create(res.dead_sword);
        titleback.setPosition(700, -200);
        titleback.setScale(5);
        this.addChild(titleback, 0.1);
        titleback.setFlippedY(true);
        var moveAction = cc.MoveTo.create(7, new cc.Point(700, 500));
        titleback.runAction(moveAction);

        titleglass = cc.Sprite.create(res.glass_frames);
        titleglass.setPosition(600, 100);
        titleglass.setScale(1);
        this.addChild(titleglass, 0.1);
        titleglass.setOpacity(0);
        //titleglass.setFlippedY(true);
        var pause = setTimeout(function() {
            var glasshyouji = cc.FadeIn.create(0);
            titleglass.runAction(cc.Sequence.create(glasshyouji));
            var moveAction = cc.MoveTo.create(1, new cc.Point(700, 400));
            titleglass.runAction(moveAction);
            var pause = setTimeout(function() {
                var moveAction = cc.MoveTo.create(1, new cc.Point(800, -100));
                titleglass.runAction(moveAction);
            }, 1000);
        }, 18500);

        titleglass2 = cc.Sprite.create(res.glass_frames);
        titleglass2.setPosition(600, 100);
        titleglass2.setScale(1);
        this.addChild(titleglass2, 0.1);
        titleglass2.setOpacity(0);
        //titleglass.setFlippedY(true);
        var pause = setTimeout(function() {
            var glasshyouji = cc.FadeIn.create(0);
            titleglass2.runAction(cc.Sequence.create(glasshyouji));
            var moveAction = cc.MoveTo.create(1, new cc.Point(700, 400));
            titleglass2.runAction(moveAction);
            var pause = setTimeout(function() {
                var moveAction = cc.MoveTo.create(1, new cc.Point(800, -100));
                titleglass2.runAction(moveAction);
            }, 1000);
        }, 19500);

        titleglass3 = cc.Sprite.create(res.glass_frames);
        titleglass3.setPosition(600, 100);
        titleglass3.setScale(1);
        this.addChild(titleglass3, 0.1);
        titleglass3.setOpacity(0);
        //titleglass.setFlippedY(true);
        var pause = setTimeout(function() {
            var glasshyouji = cc.FadeIn.create(0);
            titleglass3.runAction(cc.Sequence.create(glasshyouji));
            var moveAction = cc.MoveTo.create(1, new cc.Point(700, 400));
            titleglass3.runAction(moveAction);
            var pause = setTimeout(function() {
                var moveAction = cc.MoveTo.create(1, new cc.Point(800, -100));
                titleglass3.runAction(moveAction);
            }, 1000);
        }, 20500);

        titleslime = cc.Sprite.create(res.greenslime1);
        titleslime.setPosition(-100, 100);
        titleslime.setScale(1.5);
        this.addChild(titleslime, 0.1);
        this.scheduleUpdate();
        titleslime.schedule(this.workinggreenslime, 0.03);
        titleslime.arukiflag = 0;
        var pause = setTimeout(function() {
            var moveAction = cc.MoveTo.create(7, new cc.Point(1100, 100));
            titleslime.runAction(moveAction);
        }, 21000);

        titleslime2 = cc.Sprite.create(res.greenslime1);
        titleslime2.setPosition(-500, 200);
        titleslime2.setScale(10);
        this.addChild(titleslime2, 0.1);
        this.scheduleUpdate();
        titleslime2.schedule(this.workinggreenslime2, 0.3);
        titleslime2.arukiflag = 0;
        var pause = setTimeout(function() {
            var moveAction = cc.MoveTo.create(20, new cc.Point(1600, 200));
            titleslime2.runAction(moveAction);
        }, 27000);

        titleakaslime = cc.Sprite.create(res.akaslime1);
        titleakaslime.setPosition(-100, 100);
        titleakaslime.setScale(1.5);
        this.addChild(titleakaslime, 0.1);
        this.scheduleUpdate();
        titleakaslime.schedule(this.workingakaslime, 0.03);
        titleakaslime.arukiflag = 0;
        var pause = setTimeout(function() {
            var moveAction = cc.MoveTo.create(7, new cc.Point(1100, 100));
            titleakaslime.runAction(moveAction);
        }, 21500);

        titlekislime = cc.Sprite.create(res.kinslime1);
        titlekislime.setPosition(-100, 100);
        titlekislime.setScale(1.5);
        this.addChild(titlekislime, 0.1);
        this.scheduleUpdate();
        titlekislime.schedule(this.workingkinslime, 0.03);
        titlekislime.arukiflag = 0;
        var pause = setTimeout(function() {
            var moveAction = cc.MoveTo.create(7, new cc.Point(1100, 100));
            titlekislime.runAction(moveAction);
        }, 22000);

        titlezonbi = cc.Sprite.create(res.zonbi1);
        titlezonbi.setPosition(-100, 100);
        titlezonbi.setScale(1.5);
        this.addChild(titlezonbi, 0.1);
        this.scheduleUpdate();
        titlezonbi.schedule(this.workingzonbi, 0.1);
        titlezonbi.arukiflag = 0;
        var pause = setTimeout(function() {
            var moveAction = cc.MoveTo.create(7, new cc.Point(1100, 100));
            titlezonbi.runAction(moveAction);
        }, 22500);

        titlebat = cc.Sprite.create(res.bat1);
        titlebat.setPosition(-100, 100);
        titlebat.setScale(1.5);
        this.addChild(titlebat, 0.1);
        this.scheduleUpdate();
        titlebat.schedule(this.workingbat, 0.05);
        titlebat.arukiflag = 0;
        var pause = setTimeout(function() {
            var moveAction = cc.MoveTo.create(7, new cc.Point(1100, 100));
            titlebat.runAction(moveAction);
        }, 23000);


        titlebacksiro = cc.Sprite.create(res.siro);
        titlebacksiro.setPosition(900, 0);
        titlebacksiro.setScale(15);
        this.addChild(titlebacksiro, 3);
        titlebacksiro.setOpacity(0);
        var sirohyouji = cc.FadeIn.create(0.5);
        var sirokesi = cc.FadeOut.create(0.5);
        var pause = setTimeout(function() {
            titlebacksiro.runAction(cc.Sequence.create(sirohyouji));
        }, 6500);
        var pause = setTimeout(function() {
            titlebacksiro.runAction(cc.Sequence.create(sirokesi));
        }, 7000);

        titlebackmori = cc.Sprite.create(res.background_back);
        titlebackmori.setPosition(500, 320);
        titlebackmori.setScale(1.2);
        this.addChild(titlebackmori, 0);
        titlebackmori.setOpacity(0);
        var morihyouji = cc.FadeIn.create(0.5);
        var pause = setTimeout(function() {
            titlebackmori.runAction(cc.Sequence.create(morihyouji));
        }, 7000);

        /*light3 = cc.Sprite.create(res.titlelight1);
        light3.setPosition(900, 400);
        light3.setScale(3);
        this.addChild(light3, 1);
        this.scheduleUpdate();
        light3.schedule(this.working, 0.15);
        light3.animeflag = 0;
*/








        /*//画像
        var sprite = cc.Sprite.create(res.kage);
        sprite.setPosition(size.width / 1.3, size.height / 7);
        sprite.setScale(0.8);
        this.addChild(sprite, 0);
*/
        /*    var label = cc.LabelTTF.create("倉庫番", "Arial", 76);

        label.setPosition(size.width / 2, size.height * 1 / 6);
        this.addChild(label, 1);
*/


        // タップイベントリスナーを登録する
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);
        return true;
    },
    working: function(event) {

        if (light.animeflag == 0.01) {
            light.initWithFile(res.toutitlelight1);
            light.animeflag = 1;
        } else if (light.animeflag == 1) {
            light.initWithFile(res.toutitlelight2);
            light.animeflag = 2;
        } else if (light.animeflag == 2) {
            light.initWithFile(res.toutitlelight3);
            light.animeflag = 3;
            light3.animeflag3 = 0.01;
        } else if (light.animeflag == 3) {
            light.initWithFile(res.toutitlelight4);
            light.animeflag = 4;
        } else if (light.animeflag == 4) {
            light.initWithFile(res.toutitlelight5);
            light.animeflag = 5;
        } else if (light.animeflag == 5) {
            light.initWithFile(res.toutitlelight6);
            light.animeflag = 6;
        } else if (light.animeflag == 6) {
            light.initWithFile(res.toutitlelight7);
            light.animeflag = 7;

        } else if (light.animeflag == 7) {
            light.initWithFile(res.toumei);
            light.animeflag = 8;

        }
    },
    workingoji: function(event) {
        var pause = setTimeout(function() {

            if (ojisan.arukiflag == 0) {
                ojisan.initWithFile(res.aruki1);
                ojisan.arukiflag = 1;

            } else if (ojisan.arukiflag == 1) {
                ojisan.initWithFile(res.aruki2);
                ojisan.arukiflag = 2;
            } else if (ojisan.arukiflag == 2) {
                ojisan.initWithFile(res.aruki3);
                ojisan.arukiflag = 3;
            } else if (ojisan.arukiflag == 3) {
                ojisan.initWithFile(res.aruki4);
                ojisan.arukiflag = 4;
            } else if (ojisan.arukiflag == 4) {
                ojisan.initWithFile(res.aruki1);
                ojisan.arukiflag = 5;
            } else if (ojisan.arukiflag == 5) {
                ojisan.initWithFile(res.aruki2);
                ojisan.arukiflag = 6;
            } else if (ojisan.arukiflag == 6) {
                ojisan.initWithFile(res.aruki3);
                ojisan.arukiflag = 7;
            } else if (ojisan.arukiflag == 7) {
                ojisan.initWithFile(res.aruki4);
                ojisan.arukiflag = 8;
            } else if (ojisan.arukiflag == 8) {
                ojisan.initWithFile(res.aruki1);
                ojisan.arukiflag = 9;
            } else if (ojisan.arukiflag == 9) {
                ojisan.initWithFile(res.aruki2);
                ojisan.arukiflag = 10;
            } else if (ojisan.arukiflag == 10) {
                ojisan.initWithFile(res.aruki3);
                ojisan.arukiflag = 11;
            } else if (ojisan.arukiflag == 11) {
                ojisan.initWithFile(res.aruki4);
                ojisan.arukiflag = 12;
            } else if (ojisan.arukiflag == 12) {
                ojisan.initWithFile(res.aruki1);
                ojisan.arukiflag = 13;
            } else if (ojisan.arukiflag == 13) {
                ojisan.initWithFile(res.aruki2);
                ojisan.arukiflag = 14;
            } else if (ojisan.arukiflag == 14) {
                ojisan.initWithFile(res.aruki3);
                ojisan.arukiflag = 15;
            } else if (ojisan.arukiflag == 15) {
                ojisan.initWithFile(res.aruki4);
                ojisan.arukiflag = 16;
            } else if (ojisan.arukiflag == 16) {
                ojisan.initWithFile(res.aruki1);
                ojisan.arukiflag = 17;
            } else if (ojisan.arukiflag == 17) {
                ojisan.initWithFile(res.aruki2);
                ojisan.arukiflag = 18;
            } else if (ojisan.arukiflag == 18) {
                ojisan.initWithFile(res.aruki3);
                ojisan.arukiflag = 19;
            } else if (ojisan.arukiflag == 19) {
                ojisan.initWithFile(res.aruki4);
                ojisan.arukiflag = 20;
            } else if (ojisan.arukiflag == 20) {
                ojisan.initWithFile(res.aruki1);
                ojisan.arukiflag = 21;
            } else if (ojisan.arukiflag == 21) {
                ojisan.initWithFile(res.aruki2);
                ojisan.arukiflag = 23;
            } else if (ojisan.arukiflag == 23) {
                ojisan.initWithFile(res.aruki3);
                ojisan.arukiflag = 24;
            } else if (ojisan.arukiflag == 24) {
                ojisan.initWithFile(res.aruki4);
                ojisan.arukiflag = 25;
            } else if (ojisan.arukiflag == 25) {
                ojisan.initWithFile(res.aruki1);
                ojisan.arukiflag = 26;
            } else if (ojisan.arukiflag == 26) {
                ojisan.initWithFile(res.aruki2);
                ojisan.arukiflag = 27;
            } else if (ojisan.arukiflag == 27) {
                ojisan.initWithFile(res.aruki3);
                ojisan.arukiflag = 28;
            } else if (ojisan.arukiflag == 28) {
                ojisan.initWithFile(res.aruki4);
                ojisan.arukiflag = 29;
            } else if (ojisan.arukiflag == 29) {
                ojisan.initWithFile(res.aruki1);
                ojisan.arukiflag = 30;
            } else if (ojisan.arukiflag == 30) {
                ojisan.initWithFile(res.aruki2);
                ojisan.arukiflag = 31;
            } else if (ojisan.arukiflag == 31) {
                ojisan.initWithFile(res.aruki3);
                ojisan.arukiflag = 32;
            } else if (ojisan.arukiflag == 32) {
                ojisan.initWithFile(res.aruki4);
                ojisan.arukiflag = 33;
            } else if (ojisan.arukiflag == 33) {
                ojisan.initWithFile(res.aruki1);
                ojisan.arukiflag = 34;
            } else if (ojisan.arukiflag == 34) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 35;
            } else if (ojisan.arukiflag == 35) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 36;
            } else if (ojisan.arukiflag == 36) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 37;
            } else if (ojisan.arukiflag == 37) {
                ojisan.initWithFile(res.janp1);
                ojisan.arukiflag = 38;
            } else if (ojisan.arukiflag == 38) {
                ojisan.initWithFile(res.janp1);
                ojisan.arukiflag = 39;
            } else if (ojisan.arukiflag == 39) {
                ojisan.initWithFile(res.janp2);
                ojisan.arukiflag = 40;
            } else if (ojisan.arukiflag == 40) {
                ojisan.initWithFile(res.janp2);
                ojisan.arukiflag = 41;
            } else if (ojisan.arukiflag == 41) {
                ojisan.initWithFile(res.janp2);
                ojisan.arukiflag = 42;
            } else if (ojisan.arukiflag == 42) {
                ojisan.initWithFile(res.janp3);
                ojisan.arukiflag = 43;
            } else if (ojisan.arukiflag == 43) {
                ojisan.initWithFile(res.janp3);
                ojisan.arukiflag = 44;
            } else if (ojisan.arukiflag == 44) {
                ojisan.initWithFile(res.janp3);
                ojisan.arukiflag = 45;
            } else if (ojisan.arukiflag == 45) {
                ojisan.initWithFile(res.janp3);
                ojisan.arukiflag = 46;
            } else if (ojisan.arukiflag == 46) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 47;
            } else if (ojisan.arukiflag == 47) {
                ojisan.initWithFile(res.tatikougeki1);
                ojisan.arukiflag = 48;
            } else if (ojisan.arukiflag == 48) {
                ojisan.initWithFile(res.tatikougeki2);
                ojisan.arukiflag = 49;
            } else if (ojisan.arukiflag == 49) {
                ojisan.initWithFile(res.tatikougeki1);
                ojisan.arukiflag = 50;
            } else if (ojisan.arukiflag == 50) {
                ojisan.initWithFile(res.tatikougeki2);
                ojisan.arukiflag = 51;
            } else if (ojisan.arukiflag == 51) {
                ojisan.initWithFile(res.tatikougeki1);
                ojisan.arukiflag = 52;
            } else if (ojisan.arukiflag == 52) {
                ojisan.initWithFile(res.tatikougeki2);
                ojisan.arukiflag = 53;
            } else if (ojisan.arukiflag == 53) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 54;
                //ojisan.setFlippedY(true);
            } else if (ojisan.arukiflag == 54) {
                ojisan.initWithFile(res.janp2);
                ojisan.arukiflag = 55;
            } else if (ojisan.arukiflag == 55) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 56;
                //ojisan.setFlippedY(true);
            } else if (ojisan.arukiflag == 56) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 57;
                //ojisan.setFlippedX(true);
            } else if (ojisan.arukiflag == 57) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 58;
                //ojisan.setFlippedX(true);
            } else if (ojisan.arukiflag == 58) {
                ojisan.initWithFile(res.tati);
                ojisan.glassflag += 1;
                if (ojisan.glassflag < 3) {
                    ojisan.arukiflag = 54;
                } else {
                    ojisan.arukiflag = 59;
                    glassflag = 0;
                }
            } else if (ojisan.arukiflag == 59) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 60;
            } else if (ojisan.arukiflag == 60) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 61;
                ojisan.setFlippedX(true);
            } else if (ojisan.arukiflag == 61) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 62;
                ojisan.setFlippedX(true);
            } else if (ojisan.arukiflag == 62) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 63;
                ojisan.setFlippedX(true);
            } else if (ojisan.arukiflag == 63) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 64;
                ojisan.setFlippedX(true);
            } else if (ojisan.arukiflag == 64) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 65;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 65) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 66;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 66) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 67;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 67) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 68;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 68) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 69;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 69) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 70;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 70) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 71;
                ojisan.setFlippedX(true);
            } else if (ojisan.arukiflag == 71) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 72;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 72) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 73;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 73) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 74;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 74) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 75;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 75) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 76;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 76) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 77;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 77) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 78;
                ojisan.setFlippedX(true);
            } else if (ojisan.arukiflag == 78) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 79;
                ojisan.setFlippedX(true);
            } else if (ojisan.arukiflag == 79) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 80;
                ojisan.setFlippedX(true);
            } else if (ojisan.arukiflag == 80) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 81;
                ojisan.setFlippedX(true);
            } else if (ojisan.arukiflag == 81) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 82;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 82) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 83;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 83) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 84;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 84) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 85;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 85) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 86;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 86) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 87;
                //ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 87) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 88;
                //ojisan.setFlippedX(true);
            } else if (ojisan.arukiflag == 88) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 89;
                //ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 89) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 90;
                //ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 90) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 91;
                //ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 91) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 92;
                //ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 92) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 93;
                //ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 93) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 94;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 94) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 95;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 95) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 96;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 96) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 97;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 97) {
                ojisan.initWithFile(res.tati);
                ojisan.arukiflag = 98;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 98) {
                ojisan.initWithFile(res.aruki1);
                ojisan.arukiflag = 99;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 99) {
                ojisan.initWithFile(res.aruki2);
                ojisan.arukiflag = 100;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 100) {
                ojisan.initWithFile(res.aruki3);
                ojisan.arukiflag = 101;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 101) {
                ojisan.initWithFile(res.aruki4);
                ojisan.arukiflag = 102;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 102) {
                ojisan.initWithFile(res.aruki1);
                ojisan.arukiflag = 103;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 103) {
                ojisan.initWithFile(res.aruki2);
                ojisan.arukiflag = 104;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 104) {
                ojisan.initWithFile(res.aruki3);
                ojisan.arukiflag = 105;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 105) {
                ojisan.initWithFile(res.aruki4);
                ojisan.arukiflag = 106;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 106) {
                ojisan.initWithFile(res.aruki1);
                ojisan.arukiflag = 107;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 107) {
                ojisan.initWithFile(res.aruki2);
                ojisan.arukiflag = 108;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 108) {
                ojisan.initWithFile(res.aruki3);
                ojisan.arukiflag = 109;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 109) {
                ojisan.initWithFile(res.aruki4);
                ojisan.arukiflag = 110;
                ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 110) {
                ojisan.initWithFile(res.aruki1);
                ojisan.arukiflag = 111;
                //ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 111) {
                ojisan.initWithFile(res.aruki2);
                ojisan.arukiflag = 112;
                //ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 112) {
                ojisan.initWithFile(res.aruki3);
                ojisan.arukiflag = 113;
                //ojisan.setFlippedX(true);

            } else if (ojisan.arukiflag == 113) {
                ojisan.initWithFile(res.aruki4);
                ojisan.arukiflag = 110;
                //ojisan.setFlippedX(true);

            }


        }, 7000);
    },
    working2: function(event) {
        var pause = setTimeout(function() {
            if (light2.animeflag2 == 0) {
                light2.initWithFile(res.akatitlelight1);
                light2.animeflag2 = 1;
            } else if (light2.animeflag2 == 1) {
                light2.initWithFile(res.akatitlelight2);
                light2.animeflag2 = 2;
            } else if (light2.animeflag2 == 2) {
                light2.initWithFile(res.akatitlelight3);
                light2.animeflag2 = 3;
                light.animeflag = 0.01;
            } else if (light2.animeflag2 == 3) {
                light2.initWithFile(res.akatitlelight4);
                light2.animeflag2 = 4;
            } else if (light2.animeflag2 == 4) {
                light2.initWithFile(res.akatitlelight5);
                light2.animeflag2 = 5;

            } else if (light2.animeflag2 == 5) {
                light2.initWithFile(res.akatitlelight6);
                light2.animeflag2 = 6;
            } else if (light2.animeflag2 == 6) {
                light2.initWithFile(res.akatitlelight7);
                light2.animeflag2 = 7;

            } else if (light2.animeflag2 == 7) {
                light2.initWithFile(res.toumei);
                light2.animeflag2 = 8;

            }
        }, 7000);
    },
    working3: function(event) {

        if (light3.animeflag3 == 0.01) {
            light3.initWithFile(res.kititlelight1);
            light3.animeflag3 = 1;
        } else if (light3.animeflag3 == 1) {
            light3.initWithFile(res.kititlelight2);
            light3.animeflag3 = 2;
        } else if (light3.animeflag3 == 2) {
            light3.initWithFile(res.kititlelight3);
            light3.animeflag3 = 3;
            light4.animeflag4 = 0.01;
        } else if (light3.animeflag3 == 3) {
            light3.initWithFile(res.kititlelight4);
            light3.animeflag3 = 4;
        } else if (light3.animeflag3 == 4) {
            light3.initWithFile(res.kititlelight5);
            light3.animeflag3 = 5;

        } else if (light3.animeflag3 == 5) {
            light3.initWithFile(res.kititlelight6);
            light3.animeflag3 = 6;
        } else if (light3.animeflag3 == 6) {
            light3.initWithFile(res.kititlelight7);
            light3.animeflag3 = 7;

        } else if (light3.animeflag3 == 7) {
            light3.initWithFile(res.toumei);
            light3.animeflag3 = 8;

        }

    },
    working4: function(event) {

        if (light4.animeflag4 == 0.01) {
            light4.initWithFile(res.midorititlelight1);
            light4.animeflag4 = 1;
        } else if (light4.animeflag4 == 1) {
            light4.initWithFile(res.midorititlelight2);
            light4.animeflag4 = 2;
        } else if (light4.animeflag4 == 2) {
            light4.initWithFile(res.midorititlelight3);
            light4.animeflag4 = 3;
            light5.animeflag5 = 0.01;
        } else if (light4.animeflag4 == 3) {
            light4.initWithFile(res.midorititlelight4);
            light4.animeflag4 = 4;
        } else if (light4.animeflag4 == 4) {
            light4.initWithFile(res.midorititlelight5);
            light4.animeflag4 = 5;

        } else if (light4.animeflag4 == 5) {
            light4.initWithFile(res.midorititlelight6);
            light4.animeflag4 = 6;
        } else if (light4.animeflag4 == 6) {
            light4.initWithFile(res.midorititlelight7);
            light4.animeflag4 = 7;

        } else if (light4.animeflag4 == 7) {
            light4.initWithFile(res.toumei);
            light4.animeflag4 = 8;

        }

    },
    working5: function(event) {

        if (light5.animeflag5 == 0.01) {
            light5.initWithFile(res.aotitlelight1);
            light5.animeflag5 = 1;
        } else if (light5.animeflag5 == 1) {
            light5.initWithFile(res.aotitlelight2);
            light5.animeflag5 = 2;
        } else if (light5.animeflag5 == 2) {
            light5.initWithFile(res.aotitlelight3);
            light5.animeflag5 = 3;
            light6.animeflag6 = 0.01;
        } else if (light5.animeflag5 == 3) {
            light5.initWithFile(res.aotitlelight4);
            light5.animeflag5 = 4;
        } else if (light5.animeflag5 == 4) {
            light5.initWithFile(res.aotitlelight5);
            light5.animeflag5 = 5;

        } else if (light5.animeflag5 == 5) {
            light5.initWithFile(res.aotitlelight6);
            light5.animeflag5 = 6;
        } else if (light5.animeflag5 == 6) {
            light5.initWithFile(res.aotitlelight7);
            light5.animeflag5 = 7;

        } else if (light5.animeflag5 == 7) {
            light5.initWithFile(res.toumei);
            light5.animeflag5 = 8;

        }

    },
    working6: function(event) {

        if (light6.animeflag6 == 0.01) {
            light6.initWithFile(res.aititlelight1);
            light6.animeflag6 = 1;
        } else if (light6.animeflag6 == 1) {
            light6.initWithFile(res.aititlelight2);
            light6.animeflag6 = 2;
        } else if (light6.animeflag6 == 2) {
            light6.initWithFile(res.aititlelight3);
            light6.animeflag6 = 3;
            light7.animeflag7 = 0.01;
        } else if (light6.animeflag6 == 3) {
            light6.initWithFile(res.aititlelight4);
            light6.animeflag6 = 4;
        } else if (light6.animeflag6 == 4) {
            light6.initWithFile(res.aititlelight5);
            light6.animeflag6 = 5;

        } else if (light6.animeflag6 == 5) {
            light6.initWithFile(res.aititlelight6);
            light6.animeflag6 = 6;
        } else if (light6.animeflag6 == 6) {
            light6.initWithFile(res.aititlelight7);
            light6.animeflag6 = 7;

        } else if (light6.animeflag6 == 7) {
            light6.initWithFile(res.toumei);
            light6.animeflag6 = 8;

        }

    },
    working7: function(event) {

        if (light7.animeflag7 == 0.01) {
            light7.initWithFile(res.murasakititlelight1);
            light7.animeflag7 = 1;
        } else if (light7.animeflag7 == 1) {
            light7.initWithFile(res.murasakititlelight2);
            light7.animeflag7 = 2;
        } else if (light7.animeflag7 == 2) {
            light7.initWithFile(res.murasakititlelight3);
            light7.animeflag7 = 3;
            light2.animeflag2 = 0;
        } else if (light7.animeflag7 == 3) {
            light7.initWithFile(res.murasakititlelight4);
            light7.animeflag7 = 4;
        } else if (light7.animeflag7 == 4) {
            light7.initWithFile(res.murasakititlelight5);
            light7.animeflag7 = 5;

        } else if (light7.animeflag7 == 5) {
            light7.initWithFile(res.murasakititlelight6);
            light7.animeflag7 = 6;
        } else if (light7.animeflag7 == 6) {
            light7.initWithFile(res.murasakititlelight7);
            light7.animeflag7 = 7;

        } else if (light7.animeflag7 == 7) {
            light7.initWithFile(res.toumei);
            light7.animeflag7 = 8;

        }

    },


    working8: function(event) {
        var pause = setTimeout(function() {

            if (light8.animeflag8 == 0) {
                light8.initWithFile(res.akatitlelight1);
                light8.animeflag8 = 1;
            } else if (light8.animeflag8 == 1) {
                light8.initWithFile(res.toutitlelight2);
                light8.animeflag8 = 2;
            } else if (light8.animeflag8 == 2) {
                light8.initWithFile(res.kititlelight3);
                light8.animeflag8 = 3;

            } else if (light8.animeflag8 == 3) {
                light8.initWithFile(res.midorititlelight4);
                light8.animeflag8 = 4;
            } else if (light8.animeflag8 == 4) {
                light8.initWithFile(res.aotitlelight5);
                light8.animeflag8 = 5;

            } else if (light8.animeflag8 == 5) {
                light8.initWithFile(res.aititlelight6);
                light8.animeflag8 = 6;
            } else if (light8.animeflag8 == 6) {
                light8.initWithFile(res.murasakititlelight7);
                light8.animeflag8 = 7;

            } else if (light8.animeflag8 == 7) {
                light8.initWithFile(res.toumei);
                light8.animeflag8 = 0;

            }
            //light8.setFlippedX(true);
            light8.setFlippedY(true);
        }, 7000);
    },
    workingniji: function(event) {
        var pause = setTimeout(function() {

            if (lightniji.animeflag8 == 0) {
                lightniji.initWithFile(res.akatitlelight1);
                lightniji.animeflag8 = 1;
            } else if (lightniji.animeflag8 == 1) {
                lightniji.initWithFile(res.toutitlelight2);
                lightniji.animeflag8 = 2;
            } else if (lightniji.animeflag8 == 2) {
                lightniji.initWithFile(res.kititlelight3);
                lightniji.animeflag8 = 3;

            } else if (lightniji.animeflag8 == 3) {
                lightniji.initWithFile(res.midorititlelight4);
                lightniji.animeflag8 = 4;
            } else if (lightniji.animeflag8 == 4) {
                lightniji.initWithFile(res.aotitlelight5);
                lightniji.animeflag8 = 5;

            } else if (lightniji.animeflag8 == 5) {
                lightniji.initWithFile(res.aititlelight6);
                lightniji.animeflag8 = 6;
            } else if (lightniji.animeflag8 == 6) {
                lightniji.initWithFile(res.murasakititlelight7);
                lightniji.animeflag8 = 7;

            } else if (lightniji.animeflag8 == 7) {
                lightniji.initWithFile(res.toumei);
                lightniji.animeflag8 = 0;

            }
            //light8.setFlippedX(true);
            //light8.setFlippedY(true);
        }, 7000);
    },
    workinglight: function(event) {
        var pause = setTimeout(function() {

            if (light0.animeflag8 == 0) {
                light0.initWithFile(res.titlelight1);
                light0.animeflag8 = 1;
            } else if (light0.animeflag8 == 1) {
                light0.initWithFile(res.titlelight2);
                light0.animeflag8 = 2;
            } else if (light0.animeflag8 == 2) {
                light0.initWithFile(res.titlelight3);
                light0.animeflag8 = 3;

            } else if (light0.animeflag8 == 3) {
                light0.initWithFile(res.titlelight4);
                light0.animeflag8 = 4;
            } else if (light0.animeflag8 == 4) {
                light0.initWithFile(res.titlelight5);
                light0.animeflag8 = 5;

            } else if (light0.animeflag8 == 5) {
                light0.initWithFile(res.titlelight6);
                light0.animeflag8 = 6;
            } else if (light0.animeflag8 == 6) {
                light0.initWithFile(res.titlelight7);
                light0.animeflag8 = 7;

            } else if (light0.animeflag8 == 7) {
                light0.initWithFile(res.toumei);
                light0.animeflag8 = 0;

            }
        }, 7000);
    },

    workinggreenslime: function(event) {
        var pause = setTimeout(function() {

            if (titleslime.arukiflag == 0) {
                titleslime.initWithFile(res.greenslime13);
                titleslime.arukiflag = 1;
            } else if (titleslime.arukiflag == 1) {
                titleslime.initWithFile(res.greenslime14);
                titleslime.arukiflag = 2;
            } else if (titleslime.arukiflag == 2) {
                titleslime.initWithFile(res.greenslime15);
                titleslime.arukiflag = 3;
            } else if (titleslime.arukiflag == 3) {
                titleslime.initWithFile(res.greenslime16);
                titleslime.arukiflag = 4;
            } else if (titleslime.arukiflag == 4) {
                titleslime.initWithFile(res.greenslime9);
                titleslime.arukiflag = 5;
            } else if (titleslime.arukiflag == 5) {
                titleslime.initWithFile(res.greenslime10);
                titleslime.arukiflag = 6;
            } else if (titleslime.arukiflag == 6) {
                titleslime.initWithFile(res.greenslime11);
                titleslime.arukiflag = 7;
            } else if (titleslime.arukiflag == 7) {
                titleslime.initWithFile(res.greenslime12);
                titleslime.arukiflag = 8;
            } else if (titleslime.arukiflag == 8) {
                titleslime.initWithFile(res.greenslime5);
                titleslime.arukiflag = 9;
            } else if (titleslime.arukiflag == 9) {
                titleslime.initWithFile(res.greenslime6);
                titleslime.arukiflag = 10;
            } else if (titleslime.arukiflag == 10) {
                titleslime.initWithFile(res.greenslime7);
                titleslime.arukiflag = 11;
            } else if (titleslime.arukiflag == 11) {
                titleslime.initWithFile(res.greenslime8);
                titleslime.arukiflag = 12;
            } else if (titleslime.arukiflag == 12) {
                titleslime.initWithFile(res.greenslime1);
                titleslime.arukiflag = 13;
            } else if (titleslime.arukiflag == 13) {
                titleslime.initWithFile(res.greenslime2);
                titleslime.arukiflag = 14;
            } else if (titleslime.arukiflag == 14) {
                titleslime.initWithFile(res.greenslime3);
                titleslime.arukiflag = 15;
            } else if (titleslime.arukiflag == 15) {
                titleslime.initWithFile(res.greenslime4);
                titleslime.arukiflag = 0;
            }
        }, 100);
    },

    workinggreenslime2: function(event) {
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

    workingakaslime: function(event) {
        var pause = setTimeout(function() {

            if (titleakaslime.arukiflag == 0) {
                titleakaslime.initWithFile(res.akaslime1);
                titleakaslime.arukiflag = 1;
            } else if (titleakaslime.arukiflag == 1) {
                titleakaslime.initWithFile(res.akaslime2);
                titleakaslime.arukiflag = 2;
            } else if (titleakaslime.arukiflag == 2) {
                titleakaslime.initWithFile(res.akaslime3);
                titleakaslime.arukiflag = 3;
            } else if (titleakaslime.arukiflag == 3) {
                titleakaslime.initWithFile(res.akaslime4);
                titleakaslime.arukiflag = 4;
            } else if (titleakaslime.arukiflag == 4) {
                titleakaslime.initWithFile(res.akaslime5);
                titleakaslime.arukiflag = 5;
            } else if (titleakaslime.arukiflag == 5) {
                titleakaslime.initWithFile(res.akaslime6);
                titleakaslime.arukiflag = 6;
            } else if (titleakaslime.arukiflag == 6) {
                titleakaslime.initWithFile(res.akaslime7);
                titleakaslime.arukiflag = 7;
            } else if (titleakaslime.arukiflag == 7) {
                titleakaslime.initWithFile(res.akaslime8);
                titleakaslime.arukiflag = 8;
            } else if (titleakaslime.arukiflag == 8) {
                titleakaslime.initWithFile(res.akaslime9);
                titleakaslime.arukiflag = 9;
            } else if (titleakaslime.arukiflag == 9) {
                titleakaslime.initWithFile(res.akaslime10);
                titleakaslime.arukiflag = 10;
            } else if (titleakaslime.arukiflag == 10) {
                titleakaslime.initWithFile(res.akaslime11);
                titleakaslime.arukiflag = 11;
            } else if (titleakaslime.arukiflag == 11) {
                titleakaslime.initWithFile(res.akaslime12);
                titleakaslime.arukiflag = 0;
            }
        }, 100);
    },

    workingkinslime: function(event) {
        var pause = setTimeout(function() {

            if (titlekislime.arukiflag == 0) {
                titlekislime.initWithFile(res.kinslime1);
                titlekislime.arukiflag = 1;
            } else if (titlekislime.arukiflag == 1) {
                titlekislime.initWithFile(res.kinslime2);
                titlekislime.arukiflag = 2;
            } else if (titlekislime.arukiflag == 2) {
                titlekislime.initWithFile(res.kinslime3);
                titlekislime.arukiflag = 3;
            } else if (titlekislime.arukiflag == 3) {
                titlekislime.initWithFile(res.kinslime4);
                titlekislime.arukiflag = 4;
            } else if (titlekislime.arukiflag == 4) {
                titlekislime.initWithFile(res.kinslime5);
                titlekislime.arukiflag = 5;
            } else if (titlekislime.arukiflag == 5) {
                titlekislime.initWithFile(res.kinslime6);
                titlekislime.arukiflag = 6;
            } else if (titlekislime.arukiflag == 6) {
                titlekislime.initWithFile(res.kinslime7);
                titlekislime.arukiflag = 7;
            } else if (titlekislime.arukiflag == 7) {
                titlekislime.initWithFile(res.kinslime8);
                titlekislime.arukiflag = 8;
            } else if (titlekislime.arukiflag == 8) {
                titlekislime.initWithFile(res.kinslime9);
                titlekislime.arukiflag = 9;
            } else if (titlekislime.arukiflag == 9) {
                titlekislime.initWithFile(res.kinslime10);
                titlekislime.arukiflag = 10;
            } else if (titlekislime.arukiflag == 10) {
                titlekislime.initWithFile(res.kinslime11);
                titlekislime.arukiflag = 11;
            } else if (titlekislime.arukiflag == 11) {
                titlekislime.initWithFile(res.kinslime12);
                titlekislime.arukiflag = 0;
            }
        }, 100);
    },

    workingzonbi: function(event) {
        var pause = setTimeout(function() {

            if (titlezonbi.arukiflag == 0) {
                titlezonbi.initWithFile(res.zonbi1);
                titlezonbi.arukiflag = 1;
            } else if (titlezonbi.arukiflag == 1) {
                titlezonbi.initWithFile(res.zonbi2);
                titlezonbi.arukiflag = 2;
            } else if (titlezonbi.arukiflag == 2) {
                titlezonbi.initWithFile(res.zonbi3);
                titlezonbi.arukiflag = 3;
            } else if (titlezonbi.arukiflag == 3) {
                titlezonbi.initWithFile(res.zonbi4);
                titlezonbi.arukiflag = 4;
            } else if (titlezonbi.arukiflag == 4) {
                titlezonbi.initWithFile(res.zonbi5);
                titlezonbi.arukiflag = 5;
            } else if (titlezonbi.arukiflag == 5) {
                titlezonbi.initWithFile(res.zonbi6);
                titlezonbi.arukiflag = 6;
            } else if (titlezonbi.arukiflag == 6) {
                titlezonbi.initWithFile(res.zonbi7);
                titlezonbi.arukiflag = 7;
            } else if (titlezonbi.arukiflag == 7) {
                titlezonbi.initWithFile(res.zonbi8);
                titlezonbi.arukiflag = 0;
            }
        }, 100);
    },
    workingbat: function(event) {
        var pause = setTimeout(function() {

            if (titlebat.arukiflag == 0) {
                titlebat.initWithFile(res.bat1);
                titlebat.arukiflag = 1;
            } else if (titlebat.arukiflag == 1) {
                titlebat.initWithFile(res.bat2);
                titlebat.arukiflag = 2;
            } else if (titlebat.arukiflag == 2) {
                titlebat.initWithFile(res.bat3);
                titlebat.arukiflag = 3;
            } else if (titlebat.arukiflag == 3) {
                titlebat.initWithFile(res.bat4);
                titlebat.arukiflag = 0;
            }
        }, 100);
    },





    onTouchBegan: function(touch, event) {
        return true;
    },
    onTouchMoved: function(touch, event) {},
    onTouchEnded: function(touch, event) {
    /*    cc.director.runScene(new gameScene());

        //bgmの再生をとめる
        if (audioEngine.isMusicPlaying()) {
            audioEngine.stopMusic();
            audioEngine.stopEffect();

        }
*/
    },

});


var titleScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        // 背景レイヤーをその場で作る
        var backgroundLayer = new cc.LayerColor(new cc.Color(0, 0, 0, 250));
        this.addChild(backgroundLayer);

        //ラベルとタップイベント取得
        var layer3 = new ThirdLayer();
        this.addChild(layer3);
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 13) enter(); // stageに行くよ
            }
        }, this);
    }
});

function enter() {
  //bgmの再生をとめる
  if (audioEngine.isMusicPlaying()) {
      audioEngine.stopMusic();
      audioEngine.stopEffect();

  }
  cc.director.runScene(new gameScene());

}
