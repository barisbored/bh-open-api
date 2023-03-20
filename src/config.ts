import { config } from "dotenv";

config();

export default {
	API_VERSION: "/v1",
	BH_API_BASE: "https://api.brawlhalla.com",
	BH_API_KEY: process.env.BH_API_KEY as string,
	PORT: process.env.PORT as unknown as number,
	MONGODB_URI: process.env.MONGODB_URI as string,
	SYNC_PERIOD: 1000 * 60 * 15,
	SYNC_RATELIMIT: {
		points: 1,
		duration: 60 * 2,
	},
	SEASONAL_RANKED: "rotating",
	BANNERS: {
		bodvar: "https://www.brawlhalla.com/c/uploads/2021/07/bodvar.png",
		cassidy: "https://www.brawlhalla.com/c/uploads/2021/07/cassidy.png",
		orion: "https://www.brawlhalla.com/c/uploads/2021/07/orion.png",
		"lord vraxx":
			"https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_VraxxM-1.png",
		gnash: "https://www.brawlhalla.com/c/uploads/2021/07/gnash.png",
		nai: "https://www.brawlhalla.com/c/uploads/2021/07/nai.png",
		hattori: "https://www.brawlhalla.com/c/uploads/2021/07/hattori.png",
		roland: "https://www.brawlhalla.com/c/uploads/2021/07/roland.png",
		scarlet: "https://www.brawlhalla.com/c/uploads/2021/07/scarlet.png",
		thatch: "https://www.brawlhalla.com/c/uploads/2021/07/thatch.png",
		ada: "https://www.brawlhalla.com/c/uploads/2021/07/ada.png",
		sentinel: "https://www.brawlhalla.com/c/uploads/2021/07/sentinel.png",
		lucien: "https://www.brawlhalla.com/c/uploads/2021/07/lucien.png",
		teros: "https://www.brawlhalla.com/c/uploads/2021/07/teros.png",
		brynn: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ValkyrieM.png",
		asuri: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_CatM.png",
		barraza:
			"https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ApocM.png",
		ember: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ElfM.png",
		azoth: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_AzothM.png",
		koji: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SamuraiM.png",
		ulgrim: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DwarfM.png",
		diana: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_MonsterHunterM.png",
		jhala: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BarbarianM.png",
		kor: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GolemM.png",
		wushang:
			"https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_MonkM.png",
		val: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ValM.png",
		ragnir: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DragonM.png",
		cross: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_CrossM.png",
		mirage: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_AssassinM.png",
		nix: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ReaperM.png",
		mordex: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_WerewolfM.png",
		yumeko: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_KitsuneM.png",
		artemis:
			"https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SpaceHunterM.png",
		caspian:
			"https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_Thief.png",
		sidra: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_Corsair.png",
		xull: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BruteM.png",
		kaya: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_IniuitM-1.png",
		isaiah: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SoldierM.png",
		jiro: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ShinobiM.png",
		"lin fei":
			"https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_WuxiaM.png",
		zariel: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_CelestialM.png",
		rayman: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_RaymanM.png",
		dusk: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ElfwarM.png",
		fait: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SpellwitchM.png",
		thor: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ThorM.png",
		petra: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_RagefighterM.png",
		vector: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ActualRobotM.png",
		volkov: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_VampLordM.png",
		onyx: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GargoyleM.png",
		jaeyun: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SellswordM.png",
		mako: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ActualSharkM.png",
		magyar: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GhostArmorM.png",
		reno: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BountyHunterM.png",
		munin: "https://www.brawlhalla.com/c/uploads/2021/12/a_Roster_Pose_BirdBardM.png",
		arcadia:
			"https://www.brawlhalla.com/c/uploads/2022/03/a_Roster_Pose_FairyQueenM.png",
		ezio: "https://www.brawlhalla.com/c/uploads/2022/07/a_Roster_Pose_EzioM.png",
		tezca: "https://www.brawlhalla.com/c/uploads/2022/12/a_Roster_Pose_LuchadorM.png",
	},
};
