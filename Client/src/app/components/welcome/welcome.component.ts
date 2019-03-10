import { Component, OnInit } from '@angular/core';
import * as BABYLON from 'babylonjs'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public src: String = "/assets/icon/play.png"
  public playing: boolean = true

  constructor() { }

  ngOnInit() {
    this.buddhism()
    this.play()
  }

  // 点击播放和暂停背景音乐
  playMusic() {
    if (this.playing) {
      this.src = "/assets/icon/abort.png"
      this.abort()
    } else {
      this.src = "/assets/icon/play.png"
      this.play()
    }
    this.playing = !this.playing
  }

  // 播放音乐
  play() {

  }
  // 暂停音乐
  abort() {

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
      // scene.clearColor = new BABYLON.Color4(0, 191, 255);
      // 添加半球光源，由上往下照射
      var light = new BABYLON.HemisphericLight("Hemi", new BABYLON.Vector3(0, 1, 0), scene);


      // 创建弧度旋转相机  参数：纵向旋转角度alpha、横向旋转角度beta、半径、目标位置、所属场景
      var camera = new BABYLON.ArcRotateCamera("Camera", -0.3, 1.5, 100, new BABYLON.Vector3(0, 15, 2), scene);
      // 相机与画布关联，可以控制场景视角变化
      camera.attachControl(canvas, true);


      // 导入3D网格素材，第一个参数 "" 表示导入的所有网格，rootUrl、sceneFilename



      BABYLON.SceneLoader.ImportMesh("", "/assets/babylon/", "buddhism.babylon", scene, function (newMeshes) {
        // 获取返回的网格
        var buddhism = newMeshes[0];
        // 简单上色参考
        var Material = new BABYLON.StandardMaterial("groundMaterial", scene);
        Material.diffuseColor = new BABYLON.Color3(1, 0.9, 0.1);
        buddhism.material = Material;

        //创建一个立方体，取消背面剔除
        var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000, scene);
        var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.disableLighting = true;
        skybox.material = skyboxMaterial;
        //设置infiniteDistance属性,让天空盒随我们的相机移动
        skybox.infiniteDistance = true;
        //移除立方体上所有的光线反射(太阳光不在天空里反射!)
        skyboxMaterial.disableLighting = true;
        //特殊天空纹理贴到立方体上
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("/assets/babylon/riverside", scene);
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
      });

      var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 3 }, scene);
      // 添加高亮层.
      var hl = new BABYLON.HighlightLayer("hl1", scene);
      hl.addMesh(sphere, BABYLON.Color3.White());
      sphere.position.x = 4;
      sphere.position.y = 11;
      sphere.position.z = 0.5;


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
