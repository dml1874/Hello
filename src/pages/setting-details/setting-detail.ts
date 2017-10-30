import { Component } from '@angular/core';

@Component({
	template: `
		<ion-header>
			<ion-navbar>
				<button menuToggle *ngIf="!selectedItem">
					<ion-icon name="menu"></ion-icon>
				</button>
				<ion-title>下载管理</ion-title>
			</ion-navbar>
		</ion-header>

		<ion-content>

			<div class="content">暂无正在进行的任务</div>

		</ion-content>
	`
})
export class SettingDetailsPage1 {

}


@Component({
	templateUrl: 'setting-detail.html'
})
export class SettingDetailsPage2{

	items = [
		'检查更新',
		'服务条款',
		'问题反馈'
	];
}
