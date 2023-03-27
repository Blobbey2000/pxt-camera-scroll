//% blockGap=8
//% block="Camera Scroll"
//% color="#E10E4E"
//% icon="\uf083"
namespace CameraScroll {

    let canCameraScroll = 0

    /**
    * Stops camera scroll.
    */
    //% block
    export function stopCameraScroll() {
        canCameraScroll = 0
    }

    /**
    * Creates a horizontal camera scroll.
    */
    //% block="scroll camera with horizontal speed $speed at vertical center $center"
    export function cameraScrollHorizontally(speed: number, center: number) {
        canCameraScroll = 1
        game.onUpdateInterval(10, function () {
            if (scene.cameraProperty(CameraProperty.X) != 0) {
                if (canCameraScroll == 1) {
                    scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + speed, center)
                }
            }
        })
    }

    /**
    * Creates a vertical camera scroll.
    */
    //% block="scroll camera with vertical speed $speed at horizontal center $center"
    export function cameraScrollVertically(speed: number, center: number) {
        canCameraScroll = 2
        game.onUpdateInterval(10, function () {
            if (scene.cameraProperty(CameraProperty.Y) != 0) {
                if (canCameraScroll == 2) {
                    scene.centerCameraAt(center, scene.cameraProperty(CameraProperty.Y) + speed)
                }
            }
        })
    }

    /**
    * Creates a diagonal camera scroll.
    */
    //% block="scroll camera with horizontal speed $horizontally and vertical speed $vertically"
    export function cameraScrollDiagonally(horizontally: number, vertically: number) {
        canCameraScroll = 3
        game.onUpdateInterval(10, function () {
            if (scene.cameraProperty(CameraProperty.X) != 0 && scene.cameraProperty(CameraProperty.Y) != 0) {
                if (canCameraScroll == 3) {
                    scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + horizontally, scene.cameraProperty(CameraProperty.Y) + vertically)
                }
            }
        })
    }

}