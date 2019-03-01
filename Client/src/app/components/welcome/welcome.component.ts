import { Component, OnInit } from '@angular/core';
import * as BABYLON from 'babylonjs'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.buddhism()
  }

  // 引擎(engine), 场景(scene), 花布(canvas), 网格(mesh), 光源(light), 相机(camera),
  // 三元向量(Vector3), 三元颜色(Color3), 动作管理器(ActionManager), 和动画(Animation)

  buddhism() {
    // 获得canvas元素
    var canvas = <HTMLCanvasElement>document.getElementById("renderCanvas");
    // 使用该canvas元素创建babylon渲染引擎
    var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

    var createScene = function () {
      // 创建一个基本的Scene对象，用于容纳其它对象 
      var scene = new BABYLON.Scene(engine);

      // 添加半球光源，由上往下照射
      var light = new BABYLON.HemisphericLight("Hemi", new BABYLON.Vector3(0, 1, 0), scene);

      // 创建弧度旋转相机  参数：纵向旋转角度alpha、横向旋转角度beta、半径、目标位置、所属场景
      var camera = new BABYLON.ArcRotateCamera("Camera", -0.3, 1.5, 100, new BABYLON.Vector3(0, 15, 2), scene);
      // 相机与画布关联，可以控制场景视角变化
      camera.attachControl(canvas, true);

      // 导入3D网格素材，第一个参数 "" 表示导入的所有网格，rootUrl、sceneFilename
      BABYLON.SceneLoader.ImportMesh("", "/assets/babylon/", "buddhism.babylon", scene);

      return scene;
    };

    var scene = createScene();

    // 持续渲染场景
    engine.runRenderLoop(function () {
      if (scene) {
        scene.render();
      }
    });

    // 建监听事件使得场景自适应屏幕大小变化
    window.addEventListener("resize", function () {
      engine.resize();
    });
  }

}
