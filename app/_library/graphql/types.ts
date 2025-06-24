export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	Email: { input: any; output: any };
	/**
	 * The `Upload` special type represents a file to be uploaded in the same HTTP request as specified by
	 *  [graphql-multipart-request-spec](https://github.com/jaydenseric/graphql-multipart-request-spec).
	 */
	Upload: { input: any; output: any };
};

export type AdminCreateInput = {
	/** Массив ид доменов */
	domains?: InputMaybe<Array<Scalars['ID']['input']>>;
	/** Емайл админа */
	email: Scalars['String']['input'];
	/** Чи має власну сторінку */
	has_owned_page: Scalars['Boolean']['input'];
	/** Ссылка на LinkedIn */
	linkedin_url?: InputMaybe<Scalars['String']['input']>;
	/** Пароль админа */
	password: Scalars['String']['input'];
	/** Номер телефона */
	phone: Scalars['String']['input'];
	/** Роль админа */
	role_id: Scalars['ID']['input'];
	/** Переводы для ФИО. */
	translates: Array<AdminTranslatesInput>;
};

export type AdminLoginType = {
	__typename?: 'AdminLoginType';
	access_token: Scalars['String']['output'];
	expires_in: Scalars['Int']['output'];
	refresh_expires_in: Scalars['Int']['output'];
	refresh_token: Scalars['String']['output'];
	token_type: Scalars['String']['output'];
};

/** Список возможных типов изображений. */
export enum AdminMediaCollectionEnum {
	Cover = 'cover',
}

/** Список всех возможных разрешений для типа: graph_admin */
export enum AdminPermissionEnum {
	AdminCreate = 'admin_create',
	AdminDelete = 'admin_delete',
	AdminList = 'admin_list',
	AdminUpdate = 'admin_update',
	ArticleCreate = 'article_create',
	ArticleDelete = 'article_delete',
	ArticleForeignDelete = 'article_foreign_delete',
	ArticleForeignRead = 'article_foreign_read',
	ArticleForeignUpdate = 'article_foreign_update',
	ArticleList = 'article_list',
	ArticleUpdate = 'article_update',
	ArticleseotemplateCreate = 'articleseotemplate_create',
	ArticleseotemplateDelete = 'articleseotemplate_delete',
	ArticleseotemplateList = 'articleseotemplate_list',
	ArticleseotemplateUpdate = 'articleseotemplate_update',
	BlockCreate = 'block_create',
	BlockDelete = 'block_delete',
	BlockList = 'block_list',
	BlockUpdate = 'block_update',
	CategoryCreate = 'category_create',
	CategoryDelete = 'category_delete',
	CategoryList = 'category_list',
	CategoryUpdate = 'category_update',
	DomainCreate = 'domain_create',
	DomainDelete = 'domain_delete',
	DomainList = 'domain_list',
	DomainUpdate = 'domain_update',
	GlobalSettingCreate = 'global_setting_create',
	GlobalSettingDelete = 'global_setting_delete',
	GlobalSettingList = 'global_setting_list',
	GlobalSettingUpdate = 'global_setting_update',
	IpAccessCreate = 'ip_access_create',
	IpAccessDelete = 'ip_access_delete',
	IpAccessList = 'ip_access_list',
	IpAccessUpdate = 'ip_access_update',
	PageCreate = 'page_create',
	PageDelete = 'page_delete',
	PageList = 'page_list',
	PageUpdate = 'page_update',
	PageseotemplateCreate = 'pageseotemplate_create',
	PageseotemplateDelete = 'pageseotemplate_delete',
	PageseotemplateList = 'pageseotemplate_list',
	PageseotemplateUpdate = 'pageseotemplate_update',
	RoleCreate = 'role_create',
	RoleDelete = 'role_delete',
	RoleList = 'role_list',
	RoleUpdate = 'role_update',
	SeoredirectCreate = 'seoredirect_create',
	SeoredirectDelete = 'seoredirect_delete',
	SeoredirectList = 'seoredirect_list',
	SeoredirectUpdate = 'seoredirect_update',
	SpecialTagCreate = 'special_tag_create',
	SpecialTagDelete = 'special_tag_delete',
	SpecialTagList = 'special_tag_list',
	SpecialTagUpdate = 'special_tag_update',
	TagCreate = 'tag_create',
	TagDelete = 'tag_delete',
	TagList = 'tag_list',
	TagUpdate = 'tag_update',
	TagseotemplateCreate = 'tagseotemplate_create',
	TagseotemplateDelete = 'tagseotemplate_delete',
	TagseotemplateList = 'tagseotemplate_list',
	TagseotemplateUpdate = 'tagseotemplate_update',
	TranslateDelete = 'translate_delete',
	TranslateList = 'translate_list',
	TranslateUpdate = 'translate_update',
	UserCreate = 'user_create',
	UserDelete = 'user_delete',
	UserList = 'user_list',
	UserUpdate = 'user_update',
}

export type AdminProfileType = {
	__typename?: 'AdminProfileType';
	/** Главное фото. */
	cover?: Maybe<File>;
	created_at: Scalars['String']['output'];
	email: Scalars['String']['output'];
	/** Имя админа */
	first_name: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	language?: Maybe<LanguageType>;
	/** Фамилия админа */
	last_name: Scalars['String']['output'];
	/** Отчество админа */
	middle_name?: Maybe<Scalars['String']['output']>;
	name: Scalars['String']['output'];
	/** Список возможных разрешений для текущей модели. */
	permission?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
	permissions?: Maybe<Array<Maybe<PermissionType>>>;
	/** Номер телефона */
	phone: Scalars['String']['output'];
	roles?: Maybe<Array<Maybe<RoleType>>>;
	updated_at: Scalars['String']['output'];
};

export type AdminTranslatesInput = {
	/** Экспертность, сведения об образовании. */
	description?: InputMaybe<Scalars['String']['input']>;
	/** Имя. */
	first_name: Scalars['String']['input'];
	/** Язык перевода. */
	language: Scalars['String']['input'];
	/** Фамилия. */
	last_name: Scalars['String']['input'];
	/** Отчество. */
	middle_name?: InputMaybe<Scalars['String']['input']>;
	/** Должность */
	position?: InputMaybe<Scalars['String']['input']>;
	/** Slug */
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type AdminTranslatesType = {
	__typename?: 'AdminTranslatesType';
	created_at: Scalars['String']['output'];
	/** Экспертность, сведения об образовании. */
	description?: Maybe<Scalars['String']['output']>;
	/** Имя админа */
	first_name: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	/** Язык перевода. */
	language: Scalars['String']['output'];
	/** Фамилия админа */
	last_name: Scalars['String']['output'];
	/** Отчество админа */
	middle_name?: Maybe<Scalars['String']['output']>;
	/** Должность */
	position?: Maybe<Scalars['String']['output']>;
	/** Slug */
	slug?: Maybe<Scalars['String']['output']>;
	updated_at: Scalars['String']['output'];
};

export type AdminType = {
	__typename?: 'AdminType';
	/** Количество созданных новостей. */
	articles_count?: Maybe<Scalars['Int']['output']>;
	/** Количество созданных новостей в текстовом формате. */
	articles_count_text: Scalars['String']['output'];
	/** Главное фото. */
	cover?: Maybe<File>;
	created_at: Scalars['String']['output'];
	/** Список доменов к которым прекреплен админ */
	domains?: Maybe<Array<DomainType>>;
	email: Scalars['Email']['output'];
	/** Чи буде автор публікуватися на своїй сторінці */
	has_owned_page: Scalars['Boolean']['output'];
	id: Scalars['ID']['output'];
	/** Является ли сущность предпочитаемой для персональной ленты новостей. */
	is_preferred: Scalars['Boolean']['output'];
	/** Ссылка на LinkedIn */
	linkedin_url?: Maybe<Scalars['String']['output']>;
	name: Scalars['String']['output'];
	/** Список возможных разрешений для текущей модели. */
	permission?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
	/** Номер телефона */
	phone: Scalars['String']['output'];
	roles?: Maybe<Array<Maybe<RoleType>>>;
	/** Перевод. */
	translate: AdminTranslatesType;
	/** Переводы. */
	translates: Array<AdminTranslatesType>;
	updated_at: Scalars['String']['output'];
};

export type AdminTypePagination = {
	__typename?: 'AdminTypePagination';
	/** List of items on the current page */
	data?: Maybe<Array<Maybe<AdminType>>>;
	/** Pagination meta data */
	meta?: Maybe<PaginationMeta>;
};

export type AdminUpdateInput = {
	/** Массив ид доменов */
	domains?: InputMaybe<Array<Scalars['ID']['input']>>;
	/** Емайл админа */
	email: Scalars['String']['input'];
	/** Чи має власну сторінку */
	has_owned_page: Scalars['Boolean']['input'];
	/** Ссылка на LinkedIn */
	linkedin_url?: InputMaybe<Scalars['String']['input']>;
	/** Пароль админа */
	password?: InputMaybe<Scalars['String']['input']>;
	/** Номер телефона */
	phone: Scalars['String']['input'];
	/** Роль админа */
	role_id: Scalars['ID']['input'];
	/** Переводы для ФИО. */
	translates: Array<AdminTranslatesInput>;
};

export type AdminUserLoginType = {
	__typename?: 'AdminUserLoginType';
	access_token: Scalars['String']['output'];
	expires_in: Scalars['Int']['output'];
	refresh_expires_in: Scalars['Int']['output'];
	token_type: Scalars['String']['output'];
};

/** Список возможных действий с уведомлениями. */
export enum AlertActionEnum {
	Read = 'read',
	Unread = 'unread',
}

/** Список возможных привязок предупреждающих сообщений. */
export enum AlertEnumType {
	EmailNotVerified = 'email_not_verified',
}

/** Сообщение для отображения на фронте (уведомления). */
export type AlertMessageType = {
	__typename?: 'AlertMessageType';
	article_id?: Maybe<Scalars['Int']['output']>;
	created_at: Scalars['String']['output'];
	description: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	is_read: Scalars['Boolean']['output'];
	title: Scalars['String']['output'];
	type: Scalars['String']['output'];
	updated_at: Scalars['String']['output'];
};

export type AlertMessageTypePagination = {
	__typename?: 'AlertMessageTypePagination';
	/** List of items on the current page */
	data?: Maybe<Array<Maybe<AlertMessageType>>>;
	/** Pagination meta data */
	meta?: Maybe<PaginationMeta>;
};

export type ArticleCardTranslatesType = {
	__typename?: 'ArticleCardTranslatesType';
	/** Язык перевода. */
	language: Scalars['String']['output'];
	/** Перевод. */
	title: Scalars['String']['output'];
};

export type ArticleCardType = {
	__typename?: 'ArticleCardType';
	/** Количество фото для карусели. */
	carousel_images_count: Scalars['Int']['output'];
	categories?: Maybe<Array<CategoryLabelType>>;
	/** Главное фото. */
	cover?: Maybe<File>;
	created_at: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	/** Флаг того что статья сохранена в избранном. */
	is_stored: Scalars['Boolean']['output'];
	published_at?: Maybe<Scalars['String']['output']>;
	/** Slug для ЧПУ. */
	slug: Scalars['String']['output'];
	/** Специальный тег. */
	special_tag?: Maybe<SpecialTagType>;
	/** Перевод для статьи и поля для SEO. */
	translate: ArticleCardTranslatesType;
	/** Видео. */
	video_links?: Maybe<Array<VideoLink>>;
	/** Количество видео. */
	video_links_count: Scalars['Int']['output'];
};

export type ArticleInput = {
	/** Статті якого автора необхідно отримати */
	author_slug?: InputMaybe<Scalars['String']['input']>;
	/** Список авторов. */
	authors?: InputMaybe<Array<Scalars['ID']['input']>>;
	/** Возможность прослушать новость. */
	can_listen: Scalars['Boolean']['input'];
	/** Список категорий. */
	categories: Array<InputMaybe<Scalars['ID']['input']>>;
	/** Массив ид доменов */
	domains?: InputMaybe<Array<Scalars['ID']['input']>>;
	/** Время чтения статьи. */
	expected_reading_time?: InputMaybe<Scalars['Int']['input']>;
	/** Выбрать новость как топ дня. */
	is_day_top?: InputMaybe<Scalars['Boolean']['input']>;
	/** Выбрать новость как выбор редакции. */
	is_editor_choice?: InputMaybe<Scalars['Boolean']['input']>;
	/** Также публиковать на фейсбуке. */
	publish_also_in_fb: Scalars['Boolean']['input'];
	/** Разрешена ли новость для RSS ленты. */
	rss_is_allowed?: InputMaybe<Scalars['Boolean']['input']>;
	/** Дата (с временем) с которой статья считается опубликованной. */
	scheduled_at?: InputMaybe<Scalars['String']['input']>;
	/** Похожие новости. */
	similar_articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Slug для ЧПУ. */
	slug: Scalars['String']['input'];
	/** ID специального тега. */
	special_tag_id?: InputMaybe<Scalars['ID']['input']>;
	/** Статус статьи. Возможные значения: draft, moderation, published, future */
	status: Scalars['String']['input'];
	/** Теги. */
	tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Переводы для статьи и поля для SEO. */
	translates: Array<ArticleTranslatesInput>;
	/** Информация по видео. */
	video_links?: InputMaybe<Array<VideoLinkInput>>;
	/** Нужно ли добавлять водяной знак для всех фото. */
	with_watermark: Scalars['Boolean']['input'];
};

/** Список возможных типов изображений. */
export enum ArticleMediaCollectionEnum {
	Archive = 'archive',
	Carousel = 'carousel',
	Cover = 'cover',
}

export type ArticleSeoTemplate = {
	__typename?: 'ArticleSeoTemplate';
	/** Категории, к которым привязан шаблон. */
	categories: Array<Maybe<CategoryType>>;
	created_at: Scalars['String']['output'];
	/** Домен. */
	domain: DomainType;
	id: Scalars['ID']['output'];
	/** Опубликован ли шаблон. */
	is_published: Scalars['Boolean']['output'];
	/** Название шаблона. */
	name: Scalars['String']['output'];
	/** Перевод для шаблона. */
	translate: ArticleSeoTemplateTranslates;
	/** Переводы для шаблона. */
	translates: Array<ArticleSeoTemplateTranslates>;
	updated_at: Scalars['String']['output'];
};

export type ArticleSeoTemplateInput = {
	/** Список категорий. */
	categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Домен ID. */
	domain_id: Scalars['ID']['input'];
	/** Опубликован ли шаблон. */
	is_published: Scalars['Boolean']['input'];
	/** Название шаблона. */
	name: Scalars['String']['input'];
	/** Переводы тега. */
	translates: Array<ArticleSeoTemplateTranslatesInput>;
};

export type ArticleSeoTemplateTranslates = {
	__typename?: 'ArticleSeoTemplateTranslates';
	/** Description */
	description?: Maybe<Scalars['String']['output']>;
	/** H1 */
	h1?: Maybe<Scalars['String']['output']>;
	/** Язык перевода */
	language: Scalars['String']['output'];
	/** Text */
	text?: Maybe<Scalars['String']['output']>;
	/** Title */
	title?: Maybe<Scalars['String']['output']>;
};

export type ArticleSeoTemplateTranslatesInput = {
	/** Description */
	description?: InputMaybe<Scalars['String']['input']>;
	/** H1 */
	h1?: InputMaybe<Scalars['String']['input']>;
	/** Язык перевода */
	language: Scalars['String']['input'];
	/** Text */
	text?: InputMaybe<Scalars['String']['input']>;
	/** Title */
	title?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleTranslatesInput = {
	/** Описание для карусели. */
	carousel_description?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое статьи. */
	content?: InputMaybe<Scalars['String']['input']>;
	/** Ключевые моменты. */
	key_points?: InputMaybe<Scalars['String']['input']>;
	/** Язык перевода. */
	language: Scalars['String']['input'];
	/** Абзац. */
	lead_paragraph?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO description тега. */
	seo_description?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO H1 тега. */
	seo_h1?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO keywords тега. */
	seo_keywords?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO title тега. */
	seo_title?: InputMaybe<Scalars['String']['input']>;
	/** Тайтл. */
	title?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleTranslatesType = {
	__typename?: 'ArticleTranslatesType';
	/** Описание для карусели. */
	carousel_description?: Maybe<Scalars['String']['output']>;
	/** Содержимое статьи. */
	content: Scalars['String']['output'];
	created_at: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	/** Ключевые моменты. */
	key_points?: Maybe<Scalars['String']['output']>;
	/** Язык перевода. */
	language: Scalars['String']['output'];
	/** Абзац. */
	lead_paragraph?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO description тега. */
	seo_description?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO H1 тега. */
	seo_h1?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO keywords тега. */
	seo_keywords?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO title тега. */
	seo_title?: Maybe<Scalars['String']['output']>;
	/** Перевод. */
	title: Scalars['String']['output'];
	updated_at: Scalars['String']['output'];
};

export type ArticleTranslatesTypeContentArgs = {
	prettify?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleType = {
	__typename?: 'ArticleType';
	/** Список соавторов. */
	authors?: Maybe<Array<AdminType>>;
	/** Возможность прослушать новость. */
	can_listen: Scalars['Boolean']['output'];
	/** Список фото для карусели. */
	carousel_images?: Maybe<Array<Maybe<File>>>;
	/** Количество фото для карусели. */
	carousel_images_count: Scalars['Int']['output'];
	/** Категории. */
	categories: Array<CategoryType>;
	/** Главное фото. */
	cover?: Maybe<File>;
	created_at: Scalars['String']['output'];
	/** Список доменов к которым прикреплена статья */
	domains?: Maybe<Array<DomainType>>;
	/** Примерное время чтения статьи. */
	expected_reading_time?: Maybe<Scalars['Int']['output']>;
	id: Scalars['ID']['output'];
	/** Вывести новость как топ дня. */
	is_day_top?: Maybe<Scalars['Boolean']['output']>;
	/** Вывести новость как выбор редакции. */
	is_editor_choice?: Maybe<Scalars['Boolean']['output']>;
	/** Флаг того что статья сохранена в понравившемся. */
	is_liked: Scalars['Boolean']['output'];
	/** Флаг того что статья сохранена в избранном. */
	is_stored: Scalars['Boolean']['output'];
	/** Количество лайков */
	liked_count: Scalars['Int']['output'];
	/** Автор. */
	owner: AdminType;
	/** Также публиковать на фейсбуке. */
	publish_also_in_fb: Scalars['Boolean']['output'];
	/** Дата с которой статья считается опубликованной. */
	published_at?: Maybe<Scalars['String']['output']>;
	/** Разрешена ли новости для RSS ленты. */
	rss_is_allowed: Scalars['Boolean']['output'];
	/** Дата (запланированная) с которой статья считается опубликованной. */
	scheduled_at?: Maybe<Scalars['String']['output']>;
	/** SEO. */
	seo: SeoType;
	/** Похожие новости. */
	similar_articles?: Maybe<Array<ArticleType>>;
	/** Slug для ЧПУ. */
	slug: Scalars['String']['output'];
	/** Специальный тег. */
	special_tag?: Maybe<SpecialTagType>;
	/** Статус статьи. Возможные значения: draft, moderation, published, future */
	status: Scalars['String']['output'];
	/** Количество сохранений */
	stored_count: Scalars['Int']['output'];
	/** Список тегов. */
	tags?: Maybe<Array<TagType>>;
	/** Количество уникальных просмотров новости за день. */
	today_unique_views: Scalars['Int']['output'];
	/** Общее количество просмотров новости. */
	total_views: Scalars['Int']['output'];
	/** Перевод для статьи и поля для SEO. */
	translate: ArticleTranslatesType;
	/** Переводы для статьи и поля для SEO. */
	translates: Array<ArticleTranslatesType>;
	/** Количество уникальных просмотров новости. */
	unique_views: Scalars['Int']['output'];
	updated_at: Scalars['String']['output'];
	/** Видео. */
	video_links?: Maybe<Array<VideoLink>>;
	/** Количество видео. */
	video_links_count: Scalars['Int']['output'];
	/** Нужно ли добавлять водяной знак для всех фото. */
	with_watermark: Scalars['Boolean']['output'];
};

export type ArticleTypePagination = {
	__typename?: 'ArticleTypePagination';
	/** List of items on the current page */
	data?: Maybe<Array<Maybe<ArticleType>>>;
	/** Pagination meta data */
	meta?: Maybe<PaginationMeta>;
};

export type Authenticatable = AdminType | UserType;

export type Block = {
	__typename?: 'Block';
	/** Дата (Y-m-d) до которой (не включительно) блок будет отображаться. */
	active_to?: Maybe<Scalars['String']['output']>;
	created_at: Scalars['String']['output'];
	/** Список доменов к которым прекреплен блок */
	domains?: Maybe<Array<DomainType>>;
	id: Scalars['ID']['output'];
	is_active: Scalars['Boolean']['output'];
	/** код блока */
	slug: Scalars['String']['output'];
	/** Перевод для блока. */
	translate: BlockTranslatesType;
	/** Переводы для блоков. */
	translates: Array<BlockTranslatesType>;
	updated_at: Scalars['String']['output'];
	/** uri рекламодателя */
	url: Scalars['String']['output'];
};

export type BlockData = {
	__typename?: 'BlockData';
	/** Размер блока. */
	size: Scalars['String']['output'];
	/** slug блока. */
	slug: Scalars['String']['output'];
	/** Название блока для админки. */
	title: Scalars['String']['output'];
};

export type BlockInput = {
	/** Дата (Y-m-d) до которой (не включительно) блок будет отображаться. */
	active_to?: InputMaybe<Scalars['String']['input']>;
	/** Массив ид доменов */
	domains: Array<Scalars['ID']['input']>;
	is_active: Scalars['Boolean']['input'];
	/** Slug для фронта. */
	slug: Scalars['String']['input'];
	/** Переводы для блоков. */
	translates: Array<BlockTranslatesInputType>;
	/** Ссылка на рекламодателя */
	url: Scalars['String']['input'];
};

/** Список возможных типов изображений. */
export enum BlockMediaCollectionEnum {
	Image = 'image',
}

export type BlockPagination = {
	__typename?: 'BlockPagination';
	/** List of items on the current page */
	data?: Maybe<Array<Maybe<Block>>>;
	/** Pagination meta data */
	meta?: Maybe<PaginationMeta>;
};

export type BlockTranslatesAttachImagesInput = {
	id: Scalars['ID']['input'];
	images: Array<FileInput>;
	images_type: BlockMediaCollectionEnum;
};

export type BlockTranslatesDetachImagesInput = {
	id: Scalars['ID']['input'];
	images: Array<InputMaybe<Scalars['ID']['input']>>;
	images_type: BlockMediaCollectionEnum;
};

export type BlockTranslatesInputType = {
	/** Язык перевода. */
	language: Scalars['String']['input'];
	/** Контент для Мобилных */
	mobile_content?: InputMaybe<Scalars['String']['input']>;
	/** Контент для Веб версии */
	web_content?: InputMaybe<Scalars['String']['input']>;
};

export type BlockTranslatesType = {
	__typename?: 'BlockTranslatesType';
	created_at: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	/** картинка блока. */
	image?: Maybe<File>;
	/** Язык перевода. */
	language: Scalars['String']['output'];
	/** Контент для Мобилных */
	mobile_content?: Maybe<Scalars['String']['output']>;
	updated_at: Scalars['String']['output'];
	/** Контент для Веб версии */
	web_content?: Maybe<Scalars['String']['output']>;
};

export type BooleanMessage = {
	__typename?: 'BooleanMessage';
	data?: Maybe<Scalars['Boolean']['output']>;
	message?: Maybe<Scalars['String']['output']>;
	/** Возможные варианты: success, error, warning */
	type?: Maybe<MessageTypeEnum>;
};

export type CategoryBlockItemTranslatesType = {
	__typename?: 'CategoryBlockItemTranslatesType';
	/** Язык перевода. */
	language: Scalars['String']['output'];
	/** Перевод. */
	title: Scalars['String']['output'];
};

export type CategoryBlockItemType = {
	__typename?: 'CategoryBlockItemType';
	/** Цвет для отображения. */
	color: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	popular_tags?: Maybe<Array<TagLabelType>>;
	/** Slug для ЧПУ. */
	slug: Scalars['String']['output'];
	/** Перевод для категории и поля для SEO. */
	translate: CategoryBlockItemTranslatesType;
};

export type CategoryInput = {
	/** Цвет для отображения. */
	color: Scalars['String']['input'];
	/** ид домена */
	domain_id: Scalars['ID']['input'];
	/** Нужно ли принудительно скрыть из списка категорий на главной. */
	hide_from_main_page: Scalars['Boolean']['input'];
	/** ID родителя. */
	parent_id?: InputMaybe<Scalars['ID']['input']>;
	/** Порядок сортировки в пределах главного меню (шапка сайта). */
	position: Scalars['Int']['input'];
	/** Порядок сортировки в списке категорий (главная страница). */
	position_in_main_page: Scalars['Int']['input'];
	/** Показывать ли принудительно в хедере (даже если это подкатегория). */
	show_in_header: Scalars['Boolean']['input'];
	/** Slug для ЧПУ. */
	slug: Scalars['String']['input'];
	/** Переводы для категории и поля для SEO. */
	translates: Array<CategoryTranslatesInput>;
};

export type CategoryLabelTranslatesType = {
	__typename?: 'CategoryLabelTranslatesType';
	/** Язык перевода. */
	language: Scalars['String']['output'];
	/** Перевод. */
	title: Scalars['String']['output'];
};

export type CategoryLabelType = {
	__typename?: 'CategoryLabelType';
	/** Цвет для отображения. */
	color: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	/** Slug для ЧПУ. */
	slug: Scalars['String']['output'];
	/** Перевод для категории */
	translate: CategoryLabelTranslatesType;
};

export type CategoryTranslatesInput = {
	/** Язык перевода. */
	language: Scalars['String']['input'];
	/** Содержимое SEO description тега. */
	seo_description?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO H1 тега. */
	seo_h1?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO text. */
	seo_text?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO title тега. */
	seo_title?: InputMaybe<Scalars['String']['input']>;
	/** Перевод. */
	title: Scalars['String']['input'];
};

export type CategoryTranslatesType = {
	__typename?: 'CategoryTranslatesType';
	id: Scalars['ID']['output'];
	/** Язык перевода. */
	language: Scalars['String']['output'];
	/** Содержимое SEO description тега. */
	seo_description?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO H1 тега. */
	seo_h1?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO text. */
	seo_text?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO title тега. */
	seo_title?: Maybe<Scalars['String']['output']>;
	/** Перевод. */
	title: Scalars['String']['output'];
};

export type CategoryType = {
	__typename?: 'CategoryType';
	articles?: Maybe<ArticleTypePagination>;
	/** Цвет для отображения. */
	color: Scalars['String']['output'];
	created_at: Scalars['String']['output'];
	/** Домен к которому относится категория. */
	domain: DomainType;
	/** Имеет ли категория предпочитаемые подкатегории для персональной ленты новостей. */
	has_preferred_children: Scalars['Boolean']['output'];
	/** Нужно ли принудительно скрыть из списка категорий на главной. */
	hide_from_main_page: Scalars['Boolean']['output'];
	id: Scalars['ID']['output'];
	/** Является ли сущность предпочитаемой для персональной ленты новостей. */
	is_preferred: Scalars['Boolean']['output'];
	/** Родительская категория. */
	parent?: Maybe<CategoryType>;
	popular_tags?: Maybe<TagTypePagination>;
	/** Порядок сортировки в пределах главного меню (шапка сайта). */
	position: Scalars['Int']['output'];
	/** Порядок сортировки в списке категорий (главная страница). */
	position_in_main_page: Scalars['Int']['output'];
	/** Показывать ли принудительно в хедере (даже если это подкатегория). */
	show_in_header: Scalars['Boolean']['output'];
	/** Slug для ЧПУ. */
	slug: Scalars['String']['output'];
	/** Все подкатегории. */
	subCategories?: Maybe<Array<Maybe<CategoryType>>>;
	/** Перевод для категории и поля для SEO. */
	translate: CategoryTranslatesType;
	/** Переводы для категории и поля для SEO. */
	translates: Array<CategoryTranslatesType>;
	updated_at: Scalars['String']['output'];
};

export type CategoryTypeArticlesArgs = {
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
};

export type CategoryTypePopular_TagsArgs = {
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
};

export type CategoryTypePagination = {
	__typename?: 'CategoryTypePagination';
	/** List of items on the current page */
	data?: Maybe<Array<Maybe<CategoryType>>>;
	/** Pagination meta data */
	meta?: Maybe<PaginationMeta>;
};

export type CommonDomain = {
	__typename?: 'CommonDomain';
	/** Черный логотип домена. */
	black_logo?: Maybe<File>;
	/** Favicon. */
	favicon_large?: Maybe<File>;
	/** Favicon. */
	favicon_medium?: Maybe<File>;
	/** Favicon. */
	favicon_small?: Maybe<File>;
	/** Логотип домена в футере. */
	footer_logo?: Maybe<File>;
	id: Scalars['ID']['output'];
	/** Логотип домена. */
	logo?: Maybe<File>;
	/** Название домена. */
	name: Scalars['String']['output'];
	setting?: Maybe<DomainSettingType>;
	/** Ссылка домена. */
	url: Scalars['String']['output'];
};

export type DomainInput = {
	/** Название домена. */
	name: Scalars['String']['input'];
	/** Ссылка домена. */
	url: Scalars['String']['input'];
};

/** Список возможных типов изображений. */
export enum DomainMediaCollectionEnum {
	BlackLogo = 'black_logo',
	FaviconLarge = 'favicon_large',
	FaviconMedium = 'favicon_medium',
	FaviconSmall = 'favicon_small',
	FooterLogo = 'footer_logo',
	Logo = 'logo',
}

export type DomainSettingInput = {
	advert_phone?: InputMaybe<Scalars['String']['input']>;
	contacts_email?: InputMaybe<Scalars['String']['input']>;
	contacts_phone?: InputMaybe<Scalars['String']['input']>;
	/** ID домена, для которого идет настройка. */
	domain_id: Scalars['ID']['input'];
	/** Ид страницы фейсбука */
	facebook_page_id?: InputMaybe<Scalars['String']['input']>;
	/** Список тегов, которые сейчас в тренде в рамках домена. */
	in_trend_tag_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Latitude (используется для погоды). */
	lat?: InputMaybe<Scalars['Float']['input']>;
	/** Longitude (используется для погоды). */
	lon?: InputMaybe<Scalars['Float']['input']>;
	/** ID тега, который сейчас в топе в рамках домена. */
	top_tag_id?: InputMaybe<Scalars['ID']['input']>;
	/** Переводы для статьи и поля для SEO. */
	translates: Array<DomainSettingTranslatesInput>;
};

export type DomainSettingTranslatesInput = {
	/** Адрес */
	address?: InputMaybe<Scalars['String']['input']>;
	advert_title?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO description тега. (страница /all-articles) */
	articles_seo_description?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO H1 тега. (страница /all-articles) */
	articles_seo_h1?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO title тега. (страница /all-articles) */
	articles_seo_title?: InputMaybe<Scalars['String']['input']>;
	contacts_title?: InputMaybe<Scalars['String']['input']>;
	/** Язык перевода. */
	language: Scalars['String']['input'];
	/** Главный редактор */
	main_redactor?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO description тега. */
	seo_description?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO H1 тега. */
	seo_h1?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO title тега. */
	seo_title?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO description тега. (страница /video) */
	video_seo_description?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO H1 тега. (страница /video) */
	video_seo_h1?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO title тега. (страница /video) */
	video_seo_title?: InputMaybe<Scalars['String']['input']>;
};

export type DomainSettingTranslatesType = {
	__typename?: 'DomainSettingTranslatesType';
	address?: Maybe<Scalars['String']['output']>;
	advert_title?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO description тега. (страница /all-articles) */
	articles_seo_description?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO H1 тега. (страница /all-articles) */
	articles_seo_h1?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO title тега. (страница /all-articles) */
	articles_seo_title?: Maybe<Scalars['String']['output']>;
	contacts_title?: Maybe<Scalars['String']['output']>;
	created_at: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	/** Язык перевода. */
	language: Scalars['String']['output'];
	main_redactor?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO description тега. */
	seo_description?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO H1 тега. */
	seo_h1?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO title тега. */
	seo_title?: Maybe<Scalars['String']['output']>;
	updated_at: Scalars['String']['output'];
	/** Содержимое SEO description тега. (страница /video) */
	video_seo_description?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO H1 тега. (страница /video) */
	video_seo_h1?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO title тега. (страница /video) */
	video_seo_title?: Maybe<Scalars['String']['output']>;
};

export type DomainSettingType = {
	__typename?: 'DomainSettingType';
	advert_phone?: Maybe<Scalars['String']['output']>;
	contacts_email?: Maybe<Scalars['String']['output']>;
	contacts_phone?: Maybe<Scalars['String']['output']>;
	created_at: Scalars['String']['output'];
	currency?: Maybe<Scalars['String']['output']>;
	domain: DomainType;
	/** Ид страницы фейсбука */
	facebook_page_id?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	in_trend_tags?: Maybe<Array<Maybe<TagType>>>;
	lat?: Maybe<Scalars['Float']['output']>;
	lon?: Maybe<Scalars['Float']['output']>;
	top_tag?: Maybe<TagType>;
	/** Перевод для категории и поля для SEO. */
	translate: DomainSettingTranslatesType;
	/** Переводы для категории и поля для SEO. */
	translates: Array<DomainSettingTranslatesType>;
	updated_at: Scalars['String']['output'];
	weather?: Maybe<Scalars['String']['output']>;
};

export type DomainSocialLinkType = {
	__typename?: 'DomainSocialLinkType';
	domain: DomainType;
	id: Scalars['ID']['output'];
	is_active: Scalars['Boolean']['output'];
	social: SocialLinkType;
	url: Scalars['String']['output'];
};

export type DomainTagType = {
	__typename?: 'DomainTagType';
	/** Добавлять ли страницу с этим тегом в sitemap домена. */
	add_to_sitemap: Scalars['Boolean']['output'];
	/** Домен. */
	domain: DomainType;
	/** ID домена. */
	domain_id: Scalars['ID']['output'];
	/** Тег. */
	tag: TagType;
	/** ID тега. */
	tag_id: Scalars['ID']['output'];
	/** Общее количество просмотров тега в данном домене. */
	total_views: Scalars['Int']['output'];
	/** Количество уникальных просмотров тега в данном домене. */
	unique_views: Scalars['Int']['output'];
};

export type DomainType = {
	__typename?: 'DomainType';
	articles?: Maybe<Array<ArticleType>>;
	/** Черный логотип домена. */
	black_logo?: Maybe<File>;
	categories?: Maybe<Array<CategoryType>>;
	domain_social_links?: Maybe<Array<DomainSocialLinkType>>;
	/** Favicon. */
	favicon_large?: Maybe<File>;
	/** Favicon. */
	favicon_medium?: Maybe<File>;
	/** Favicon. */
	favicon_small?: Maybe<File>;
	/** Логотип домена в футере. */
	footer_logo?: Maybe<File>;
	id: Scalars['ID']['output'];
	/** Логотип домена. */
	logo?: Maybe<File>;
	/** Имя домена для админки */
	name: Scalars['String']['output'];
	setting?: Maybe<DomainSettingType>;
	tags?: Maybe<TagTypePagination>;
	trend_tags?: Maybe<Array<TagType>>;
	url: Scalars['String']['output'];
};

export type DomainTypeTagsArgs = {
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
};

export type File = {
	__typename?: 'File';
	/** Поле для SEO. */
	alt?: Maybe<Scalars['String']['output']>;
	/** Подпись фото. */
	caption?: Maybe<Scalars['String']['output']>;
	/** Цвет фото. */
	color?: Maybe<Scalars['String']['output']>;
	/** Уникальный идентификатор файла */
	id: Scalars['ID']['output'];
	/** Тип файла. */
	mime_type?: Maybe<Scalars['String']['output']>;
	/** Название файла (без расширения). */
	name: Scalars['String']['output'];
	/** Ссылка на оригинал файл. */
	original_url?: Maybe<Scalars['String']['output']>;
	/** Позиция во время сортировки. */
	position?: Maybe<Scalars['Int']['output']>;
	/** Srcset для html (если установлен). */
	responsive_images?: Maybe<Scalars['String']['output']>;
	/** Все нарезанные картинки. */
	responsive_images_as_array: Array<ResponsiveImageSize>;
	/** Размер файла (в байтах, 1МБ = 1024б). */
	size: Scalars['Int']['output'];
	/** Ссылка на файл определенного размера. */
	special_url?: Maybe<Scalars['String']['output']>;
	/** Поле для SEO. */
	title?: Maybe<Scalars['String']['output']>;
	/** Ссылка на файл. */
	url?: Maybe<Scalars['String']['output']>;
	/** Уникальный идентификатор файла (UUID) */
	uuid: Scalars['String']['output'];
};

export type FileSpecial_UrlArgs = {
	image_type?: InputMaybe<Scalars['String']['input']>;
};

export type FileInput = {
	/** Поле для SEO. */
	alt?: InputMaybe<Scalars['String']['input']>;
	/** Подпись фото. */
	caption?: InputMaybe<Scalars['String']['input']>;
	/** Цвет фото. */
	color?: InputMaybe<Scalars['String']['input']>;
	/** Файл для загрузки. */
	file: Scalars['Upload']['input'];
	/** Позиция во время сортировки. */
	position?: InputMaybe<Scalars['Int']['input']>;
	/** Поле для SEO. */
	title?: InputMaybe<Scalars['String']['input']>;
};

export type GlobalSettingInput = {
	/** Ключ хранимого поля. */
	field_key: Scalars['String']['input'];
	/** Значение хранимого поля. */
	field_value: Scalars['String']['input'];
};

export type GlobalSettingType = {
	__typename?: 'GlobalSettingType';
	/** Ключ хранимого поля. */
	field_key: Scalars['String']['output'];
	/** Значение хранимого поля. */
	field_value: Scalars['String']['output'];
};

export type GrantGroupType = {
	__typename?: 'GrantGroupType';
	key?: Maybe<Scalars['ID']['output']>;
	name: Scalars['String']['output'];
	permissions?: Maybe<Array<Maybe<GrantType>>>;
	position: Scalars['Int']['output'];
};

export type GrantType = {
	__typename?: 'GrantType';
	key: Scalars['String']['output'];
	name: Scalars['String']['output'];
	position: Scalars['Int']['output'];
};

export type HomePageCategoryBlockType = {
	__typename?: 'HomePageCategoryBlockType';
	articles?: Maybe<Array<ArticleCardType>>;
	categories?: Maybe<Array<CategoryBlockItemType>>;
};

export type ImageSize = {
	__typename?: 'ImageSize';
	/** slug размера картинки. */
	slug: Scalars['String']['output'];
	/** Ширина картинки. */
	width: Scalars['Int']['output'];
};

export type IntMessage = {
	__typename?: 'IntMessage';
	data?: Maybe<Scalars['Int']['output']>;
	message?: Maybe<Scalars['String']['output']>;
	/** Возможные варианты: success, error, warning */
	type?: Maybe<MessageTypeEnum>;
};

export type IpAccessType = {
	__typename?: 'IpAccessType';
	active: Scalars['Boolean']['output'];
	address: Scalars['String']['output'];
	created_at: Scalars['String']['output'];
	description?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	updated_at: Scalars['String']['output'];
};

export type LanguageType = {
	__typename?: 'LanguageType';
	name: Scalars['String']['output'];
	slug: Scalars['String']['output'];
};

/** Список типов сообщений. */
export enum MessageTypeEnum {
	Error = 'error',
	Success = 'success',
	Warning = 'warning',
}

export type Mutation = {
	__typename?: 'Mutation';
	ArticleUserLike?: Maybe<BooleanMessage>;
	ArticleUserStore?: Maybe<BooleanMessage>;
	/** Авторизация как гость. */
	AuthAsGuest: UserLoginType;
	ChangePasswordUser?: Maybe<Scalars['Boolean']['output']>;
	DeleteUser?: Maybe<Scalars['Boolean']['output']>;
	EmailVerificationUser?: Maybe<Scalars['Boolean']['output']>;
	LoginUser?: Maybe<UserLoginType>;
	LogoutUser?: Maybe<Scalars['Boolean']['output']>;
	MarkAlert?: Maybe<BooleanMessage>;
	RefreshTokenUser?: Maybe<UserLoginType>;
	RegisterUser?: Maybe<UserLoginType>;
	ResendEmailVerificationUser?: Maybe<Scalars['Boolean']['output']>;
	SetTranslate?: Maybe<Scalars['Boolean']['output']>;
	/** Авторизация через соц сети для мобил. */
	SocialAuthMobile: UserLoginType;
	/** Метод принимает массив настроек для персональной ленты новостей. */
	UserArticlesPersonalSettings?: Maybe<BooleanMessage>;
	/** Метод позволяет подписаться или отписаться от рассылки для текущего домена. */
	UserChangeSubscription?: Maybe<BooleanMessage>;
	/** Метод для отправки ссылки для сброса пароля. На почту клиента приходит ссылка в виде {link}/{token}, {link}. */
	UserForgotPassword?: Maybe<Scalars['Boolean']['output']>;
	/** Метод принимает токен, ранее отправленный на почту в виде ссылки на фронт. */
	UserResetPassword?: Maybe<Scalars['Boolean']['output']>;
	UserUpdate?: Maybe<UserTypeMessage>;
	fcmTokenAdd: Scalars['Boolean']['output'];
};

export type MutationArticleUserLikeArgs = {
	article: Scalars['ID']['input'];
	like: Scalars['Boolean']['input'];
};

export type MutationArticleUserStoreArgs = {
	article: Scalars['ID']['input'];
	store: Scalars['Boolean']['input'];
};

export type MutationAuthAsGuestArgs = {
	device_id: Scalars['String']['input'];
};

export type MutationChangePasswordUserArgs = {
	current: Scalars['String']['input'];
	password: Scalars['String']['input'];
	password_confirmation: Scalars['String']['input'];
};

export type MutationEmailVerificationUserArgs = {
	code: Scalars['String']['input'];
};

export type MutationLoginUserArgs = {
	device_id?: InputMaybe<Scalars['String']['input']>;
	password: Scalars['String']['input'];
	username: Scalars['String']['input'];
};

export type MutationMarkAlertArgs = {
	action: AlertActionEnum;
	id: Scalars['ID']['input'];
};

export type MutationRefreshTokenUserArgs = {
	refresh_token: Scalars['String']['input'];
};

export type MutationRegisterUserArgs = {
	device_id?: InputMaybe<Scalars['String']['input']>;
	email: Scalars['String']['input'];
	first_name?: InputMaybe<Scalars['String']['input']>;
	last_name?: InputMaybe<Scalars['String']['input']>;
	middle_name?: InputMaybe<Scalars['String']['input']>;
	password: Scalars['String']['input'];
	password_confirmation: Scalars['String']['input'];
	telegram?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSetTranslateArgs = {
	lang: Scalars['String']['input'];
};

export type MutationSocialAuthMobileArgs = {
	code: Scalars['String']['input'];
	device_id?: InputMaybe<Scalars['String']['input']>;
	provider: Scalars['String']['input'];
};

export type MutationUserArticlesPersonalSettingsArgs = {
	settings: Array<InputMaybe<UserPersonalSettingsInput>>;
};

export type MutationUserChangeSubscriptionArgs = {
	subscribe: Scalars['Boolean']['input'];
	token?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserForgotPasswordArgs = {
	email: Scalars['String']['input'];
	link: Scalars['String']['input'];
};

export type MutationUserResetPasswordArgs = {
	token: Scalars['String']['input'];
};

export type MutationUserUpdateArgs = {
	id: Scalars['ID']['input'];
	user: UserUpdateInput;
};

export type MutationFcmTokenAddArgs = {
	fcm_token: Scalars['String']['input'];
};

export type Page = {
	__typename?: 'Page';
	created_at: Scalars['String']['output'];
	/** Список доменов к которым прекреплена страница */
	domains?: Maybe<Array<DomainType>>;
	id: Scalars['ID']['output'];
	/** slug/uri страницы */
	slug: Scalars['String']['output'];
	/** Перевод для контента страницы и поля для SEO. */
	translate: PageTranslatesType;
	/** Переводы для контента страницы и поля для SEO. */
	translates: Array<PageTranslatesType>;
	updated_at: Scalars['String']['output'];
};

export type PageData = {
	__typename?: 'PageData';
	/** список блоков. */
	blocks: Array<BlockData>;
	/** Страница для размещения. */
	page: Scalars['String']['output'];
};

export type PageInput = {
	/** Массив ид доменов */
	domains: Array<Scalars['ID']['input']>;
	/** slug/uri страницы */
	slug: Scalars['String']['input'];
	/** Переводы для статических страниц. */
	translates: Array<PageTranslatesInput>;
};

export type PagePagination = {
	__typename?: 'PagePagination';
	/** List of items on the current page */
	data?: Maybe<Array<Maybe<Page>>>;
	/** Pagination meta data */
	meta?: Maybe<PaginationMeta>;
};

export type PageSeoTemplate = {
	__typename?: 'PageSeoTemplate';
	created_at: Scalars['String']['output'];
	/** ID домена. */
	domain_id: Scalars['ID']['output'];
	id: Scalars['ID']['output'];
	/** Опубликован ли шаблон. */
	is_published: Scalars['Boolean']['output'];
	/** Название шаблона. */
	name: Scalars['String']['output'];
	/** Перевод для шаблона. */
	translate: PageSeoTemplateTranslates;
	/** Переводы для шаблона. */
	translates: Array<PageSeoTemplateTranslates>;
	updated_at: Scalars['String']['output'];
};

export type PageSeoTemplateInput = {
	/** ID домена. */
	domain_id: Scalars['ID']['input'];
	/** Опубликован ли шаблон. */
	is_published: Scalars['Boolean']['input'];
	/** Название шаблона. */
	name: Scalars['String']['input'];
	/** Переводы шаблона. */
	translates: Array<PageSeoTemplateTranslatesInput>;
};

export type PageSeoTemplateTranslates = {
	__typename?: 'PageSeoTemplateTranslates';
	/** Description */
	description?: Maybe<Scalars['String']['output']>;
	/** H1 */
	h1?: Maybe<Scalars['String']['output']>;
	/** Язык перевода */
	language: Scalars['String']['output'];
	/** Text */
	text?: Maybe<Scalars['String']['output']>;
	/** Title */
	title?: Maybe<Scalars['String']['output']>;
	/** URL страницы */
	url?: Maybe<Scalars['String']['output']>;
};

export type PageSeoTemplateTranslatesInput = {
	/** Description */
	description?: InputMaybe<Scalars['String']['input']>;
	/** H1 */
	h1?: InputMaybe<Scalars['String']['input']>;
	/** Язык перевода */
	language: Scalars['String']['input'];
	/** Text */
	text?: InputMaybe<Scalars['String']['input']>;
	/** Title */
	title?: InputMaybe<Scalars['String']['input']>;
	/** URL страницы */
	url?: InputMaybe<Scalars['String']['input']>;
};

export type PageTranslatesInput = {
	/** Контент. */
	content: Scalars['String']['input'];
	/** Язык перевода. */
	language: Scalars['String']['input'];
	/** Содержимое SEO description тега. */
	seo_description?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO H1 тега. */
	seo_h1?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO title тега. */
	seo_title?: InputMaybe<Scalars['String']['input']>;
	/** Перевод. */
	title: Scalars['String']['input'];
};

export type PageTranslatesType = {
	__typename?: 'PageTranslatesType';
	/** Контент. */
	content: Scalars['String']['output'];
	created_at: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	/** Язык перевода. */
	language: Scalars['String']['output'];
	/** Содержимое SEO description тега. */
	seo_description?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO H1 тега. */
	seo_h1?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO title тега. */
	seo_title?: Maybe<Scalars['String']['output']>;
	/** Перевод. */
	title: Scalars['String']['output'];
	updated_at: Scalars['String']['output'];
};

export type PaginationMeta = {
	__typename?: 'PaginationMeta';
	/** Current page of the cursor */
	current_page: Scalars['Int']['output'];
	/** Number of the first item returned */
	from?: Maybe<Scalars['Int']['output']>;
	/** Determines if cursor has more pages after the current page */
	has_more_pages: Scalars['Boolean']['output'];
	/** The last page (number of pages) */
	last_page: Scalars['Int']['output'];
	/** Number of items returned per page */
	per_page: Scalars['Int']['output'];
	/** Number of the last item returned */
	to?: Maybe<Scalars['Int']['output']>;
	/** Number of total items selected by the query */
	total: Scalars['Int']['output'];
};

export type PermissionType = {
	__typename?: 'PermissionType';
	/** @deprecated ID для permission запрашивать нельзя */
	id: Scalars['ID']['output'];
	name?: Maybe<Scalars['String']['output']>;
};

export type PreferredInterest = AdminType | CategoryType | TagType;

export type PublicDomainType = {
	__typename?: 'PublicDomainType';
	articles?: Maybe<Array<ArticleType>>;
	/** Черный логотип домена. */
	black_logo?: Maybe<File>;
	categories?: Maybe<Array<CategoryType>>;
	domain_social_links?: Maybe<Array<DomainSocialLinkType>>;
	/** Favicon. */
	favicon_large?: Maybe<File>;
	/** Favicon. */
	favicon_medium?: Maybe<File>;
	/** Favicon. */
	favicon_small?: Maybe<File>;
	/** Логотип домена в футере. */
	footer_logo?: Maybe<File>;
	id: Scalars['ID']['output'];
	/** Логотип домена. */
	logo?: Maybe<File>;
	/** Имя домена для админки */
	name: Scalars['String']['output'];
	setting?: Maybe<DomainSettingType>;
	tags?: Maybe<TagTypePagination>;
	trend_tags?: Maybe<Array<TagType>>;
	url: Scalars['String']['output'];
};

export type PublicDomainTypeTagsArgs = {
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
};

export type PublicDomainTypePagination = {
	__typename?: 'PublicDomainTypePagination';
	/** List of items on the current page */
	data?: Maybe<Array<Maybe<PublicDomainType>>>;
	/** Pagination meta data */
	meta?: Maybe<PaginationMeta>;
};

export type Query = {
	__typename?: 'Query';
	Alerts?: Maybe<AlertMessageTypePagination>;
	Articles?: Maybe<ArticleTypePagination>;
	Authors?: Maybe<AdminTypePagination>;
	BlocksList?: Maybe<BlockPagination>;
	Categories?: Maybe<CategoryTypePagination>;
	/** Список доменов для фронта */
	DomainsList?: Maybe<PublicDomainTypePagination>;
	ImageSizesDictionary: Array<ImageSize>;
	Languages?: Maybe<Array<Maybe<LanguageType>>>;
	PagesList?: Maybe<PagePagination>;
	PreferredInterests: Array<PreferredInterest>;
	SocialLoginRedirect?: Maybe<SocialLoginRedirectType>;
	SpecialTags?: Maybe<SpecialTagTypePagination>;
	StoredArticles?: Maybe<ArticleTypePagination>;
	TagSeoQuery: SeoType;
	Tags?: Maybe<TagTypePagination>;
	TopArticlesToday?: Maybe<ArticleTypePagination>;
	TranslatesSimple?: Maybe<Array<Maybe<TranslateType>>>;
	UserHasUnreadNotifications?: Maybe<BooleanMessage>;
	UserProfile?: Maybe<UserProfileType>;
	UserStoredArticlesCount?: Maybe<IntMessage>;
	homePageCategoryBlock: HomePageCategoryBlockType;
	/** Получение хеша переводов для конкретного языка */
	mobileTranslatesHash: Scalars['String']['output'];
	newsColumn?: Maybe<Array<ArticleCardType>>;
};

export type QueryAlertsArgs = {
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryArticlesArgs = {
	author?: InputMaybe<Scalars['ID']['input']>;
	author_slug?: InputMaybe<Scalars['String']['input']>;
	category?: InputMaybe<Scalars['ID']['input']>;
	category_slug?: InputMaybe<Scalars['String']['input']>;
	domain?: InputMaybe<Scalars['ID']['input']>;
	exclude_article?: InputMaybe<Scalars['ID']['input']>;
	exclude_company_news?: InputMaybe<Scalars['Boolean']['input']>;
	has_photos?: InputMaybe<Scalars['Boolean']['input']>;
	has_videos?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	is_day_top?: InputMaybe<Scalars['Boolean']['input']>;
	is_editor_choice?: InputMaybe<Scalars['Boolean']['input']>;
	owner?: InputMaybe<Scalars['ID']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
	personal_articles?: InputMaybe<Scalars['Boolean']['input']>;
	popular_today?: InputMaybe<Scalars['Boolean']['input']>;
	published_at?: InputMaybe<Scalars['String']['input']>;
	published_from?: InputMaybe<Scalars['String']['input']>;
	published_to?: InputMaybe<Scalars['String']['input']>;
	query?: InputMaybe<Scalars['String']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	sort?: InputMaybe<Scalars['String']['input']>;
	status?: InputMaybe<Scalars['String']['input']>;
	tag?: InputMaybe<Scalars['ID']['input']>;
	tag_slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryAuthorsArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
	query?: InputMaybe<Scalars['String']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	sort?: InputMaybe<Scalars['String']['input']>;
};

export type QueryBlocksListArgs = {
	domains?: InputMaybe<Array<Scalars['ID']['input']>>;
	id?: InputMaybe<Scalars['ID']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	page_name?: InputMaybe<Scalars['String']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
	query?: InputMaybe<Scalars['String']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	sort?: InputMaybe<Scalars['String']['input']>;
};

export type QueryCategoriesArgs = {
	domain_id?: InputMaybe<Scalars['ID']['input']>;
	has_sub_categories?: InputMaybe<Scalars['Boolean']['input']>;
	hide_from_main_page?: InputMaybe<Scalars['Boolean']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	parent?: InputMaybe<Scalars['ID']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
	query?: InputMaybe<Scalars['String']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	sort?: InputMaybe<Scalars['String']['input']>;
};

export type QueryDomainsListArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
	only_current?: InputMaybe<Scalars['Boolean']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
	query?: InputMaybe<Scalars['String']['input']>;
	sort?: InputMaybe<Scalars['String']['input']>;
};

export type QueryPagesListArgs = {
	domains?: InputMaybe<Array<Scalars['ID']['input']>>;
	id?: InputMaybe<Scalars['ID']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
	query?: InputMaybe<Scalars['String']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	sort?: InputMaybe<Scalars['String']['input']>;
};

export type QueryPreferredInterestsArgs = {
	created_at?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
	updated_at?: InputMaybe<Scalars['String']['input']>;
};

export type QuerySocialLoginRedirectArgs = {
	provider: Scalars['String']['input'];
};

export type QuerySpecialTagsArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
	query?: InputMaybe<Scalars['String']['input']>;
	sort?: InputMaybe<Scalars['String']['input']>;
};

export type QueryStoredArticlesArgs = {
	has_videos?: InputMaybe<Scalars['Boolean']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
	published_from?: InputMaybe<Scalars['String']['input']>;
	published_to?: InputMaybe<Scalars['String']['input']>;
	sort?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTagSeoQueryArgs = {
	for_tag: Scalars['String']['input'];
};

export type QueryTagsArgs = {
	domain?: InputMaybe<Scalars['ID']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
	query?: InputMaybe<Scalars['String']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	sort?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTopArticlesTodayArgs = {
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryTranslatesSimpleArgs = {
	lang: Array<InputMaybe<Scalars['String']['input']>>;
	place: Array<InputMaybe<Scalars['String']['input']>>;
};

export type QueryHomePageCategoryBlockArgs = {
	domain_id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryMobileTranslatesHashArgs = {
	lang?: InputMaybe<Scalars['String']['input']>;
};

export type QueryNewsColumnArgs = {
	domain_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Сообщение для отображения на фронте. */
export type ResponseMessageType = {
	__typename?: 'ResponseMessageType';
	message: Scalars['String']['output'];
	/** Возможные варианты: success, error, warning */
	type: MessageTypeEnum;
};

export type ResponsiveImageSize = {
	__typename?: 'ResponsiveImageSize';
	/** Высота картинки. */
	height: Scalars['Int']['output'];
	/** slug изображения */
	slug: Scalars['String']['output'];
	/** Ссылка на файл. */
	url?: Maybe<Scalars['String']['output']>;
	/** Ширина картинки. */
	width: Scalars['Int']['output'];
};

export type RoleTranslateInputType = {
	/** Language */
	language: Scalars['String']['input'];
	/** Название */
	title: Scalars['String']['input'];
};

export type RoleTranslateType = {
	__typename?: 'RoleTranslateType';
	id: Scalars['ID']['output'];
	language: Scalars['String']['output'];
	title: Scalars['String']['output'];
};

export type RoleType = {
	__typename?: 'RoleType';
	created_at: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	isForOwner: Scalars['Boolean']['output'];
	name: Scalars['String']['output'];
	/** Список возможных разрешений для текущей модели. */
	permission?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
	permissions: Array<Maybe<PermissionType>>;
	translate: RoleTranslateType;
	translates: Array<Maybe<RoleTranslateType>>;
	updated_at: Scalars['String']['output'];
};

export type SeoRedirect = {
	__typename?: 'SeoRedirect';
	created_at: Scalars['String']['output'];
	/** Domain id. */
	domain_id: Scalars['ID']['output'];
	/** Статус HTTP кода */
	http_status_code: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	/** Опубликован ли редирект. */
	is_published: Scalars['Boolean']['output'];
	/** Название редиректа. */
	name: Scalars['String']['output'];
	updated_at: Scalars['String']['output'];
	/** Откуда редиректить. */
	url_from: Scalars['String']['output'];
	/** Куда редиректить. */
	url_to: Scalars['String']['output'];
};

export type SeoRedirectInput = {
	/** Domain id. */
	domain_id: Scalars['ID']['input'];
	/** Статус HTTP кода */
	http_status_code: Scalars['Int']['input'];
	/** Опубликован ли редирект. */
	is_published: Scalars['Boolean']['input'];
	/** Название редиректа. */
	name: Scalars['String']['input'];
	/** Откуда редиректить. */
	url_from: Scalars['String']['input'];
	/** Куда редиректить. */
	url_to: Scalars['String']['input'];
};

export type SeoType = {
	__typename?: 'SeoType';
	/** seo description */
	seo_description?: Maybe<Scalars['String']['output']>;
	/** seo h1 */
	seo_h1?: Maybe<Scalars['String']['output']>;
	/** seo title */
	seo_title?: Maybe<Scalars['String']['output']>;
};

export type SocialLinkType = {
	__typename?: 'SocialLinkType';
	/** Could be null */
	icon?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	position: Scalars['Int']['output'];
	title: Scalars['String']['output'];
};

export type SocialLoginRedirectType = {
	__typename?: 'SocialLoginRedirectType';
	/** сгенерированный урл для редиректа. */
	redirect_url: Scalars['String']['output'];
};

export type SpecialTagInput = {
	/** Переводы тега. */
	translates: Array<SpecialTagTranslatesInput>;
};

export type SpecialTagTranslatesInput = {
	/** Язык перевода. */
	language: Scalars['String']['input'];
	/** Перевод. */
	title: Scalars['String']['input'];
};

export type SpecialTagTranslatesType = {
	__typename?: 'SpecialTagTranslatesType';
	created_at: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	/** Язык перевода. */
	language: Scalars['String']['output'];
	/** Перевод. */
	title: Scalars['String']['output'];
	updated_at: Scalars['String']['output'];
};

export type SpecialTagType = {
	__typename?: 'SpecialTagType';
	created_at: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	/** Перевод тега. */
	translate: SpecialTagTranslatesType;
	/** Переводы тега. */
	translates: Array<SpecialTagTranslatesType>;
	updated_at: Scalars['String']['output'];
};

export type SpecialTagTypePagination = {
	__typename?: 'SpecialTagTypePagination';
	/** List of items on the current page */
	data?: Maybe<Array<Maybe<SpecialTagType>>>;
	/** Pagination meta data */
	meta?: Maybe<PaginationMeta>;
};

export type TagDomainSettingInput = {
	/** Чи додавати сторінку з цим тегом до sitemap цього домену */
	add_to_sitemap?: InputMaybe<Scalars['Boolean']['input']>;
	/** ID домена */
	domain_id: Scalars['ID']['input'];
};

export type TagInput = {
	/** Налаштування тегу для різних доменів */
	domain_settings: Array<TagDomainSettingInput>;
	/** Slug тега */
	slug: Scalars['String']['input'];
	/** Переводы тега. */
	translates: Array<TagTranslatesInput>;
};

export type TagLabelTranslatesType = {
	__typename?: 'TagLabelTranslatesType';
	/** Язык перевода. */
	language: Scalars['String']['output'];
	/** Перевод. */
	title: Scalars['String']['output'];
};

export type TagLabelType = {
	__typename?: 'TagLabelType';
	id: Scalars['ID']['output'];
	slug: Scalars['String']['output'];
	/** Перевод тега. */
	translate: TagLabelTranslatesType;
};

export type TagSeoTemplate = {
	__typename?: 'TagSeoTemplate';
	created_at: Scalars['String']['output'];
	/** Домен. */
	domain: DomainType;
	id: Scalars['ID']['output'];
	/** Опубликован ли шаблон. */
	is_published: Scalars['Boolean']['output'];
	/** Название шаблона. */
	name: Scalars['String']['output'];
	/** Перевод для шаблона. */
	translate: TagSeoTemplateTranslates;
	/** Переводы для шаблона. */
	translates: Array<TagSeoTemplateTranslates>;
	updated_at: Scalars['String']['output'];
};

export type TagSeoTemplateInput = {
	/** Домен ID. */
	domain_id: Scalars['Int']['input'];
	/** Опубликован ли шаблон. */
	is_published: Scalars['Boolean']['input'];
	/** Название шаблона. */
	name: Scalars['String']['input'];
	/** Переводы тега. */
	translates: Array<TagSeoTemplateTranslatesInput>;
};

export type TagSeoTemplateTranslates = {
	__typename?: 'TagSeoTemplateTranslates';
	/** Description */
	description?: Maybe<Scalars['String']['output']>;
	/** H1 */
	h1?: Maybe<Scalars['String']['output']>;
	/** Язык перевода */
	language: Scalars['String']['output'];
	/** Text */
	text?: Maybe<Scalars['String']['output']>;
	/** Title */
	title?: Maybe<Scalars['String']['output']>;
};

export type TagSeoTemplateTranslatesInput = {
	/** Description */
	description?: InputMaybe<Scalars['String']['input']>;
	/** H1 */
	h1?: InputMaybe<Scalars['String']['input']>;
	/** Язык перевода */
	language: Scalars['String']['input'];
	/** Text */
	text?: InputMaybe<Scalars['String']['input']>;
	/** Title */
	title?: InputMaybe<Scalars['String']['input']>;
};

export type TagTranslatesInput = {
	/** Язык перевода. */
	language: Scalars['String']['input'];
	/** Содержимое SEO description тега. */
	seo_description?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO H1 тега. */
	seo_h1?: InputMaybe<Scalars['String']['input']>;
	/** Содержимое SEO title тега. */
	seo_title?: InputMaybe<Scalars['String']['input']>;
	/** Перевод. */
	title: Scalars['String']['input'];
};

export type TagTranslatesType = {
	__typename?: 'TagTranslatesType';
	created_at: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	/** Язык перевода. */
	language: Scalars['String']['output'];
	/** Содержимое SEO description тега. */
	seo_description?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO H1 тега. */
	seo_h1?: Maybe<Scalars['String']['output']>;
	/** Содержимое SEO title тега. */
	seo_title?: Maybe<Scalars['String']['output']>;
	/** Перевод. */
	title: Scalars['String']['output'];
	updated_at: Scalars['String']['output'];
};

export type TagType = {
	__typename?: 'TagType';
	/** Чи додавати сторінку з цим тегом до sitemap цього домену. Це поле запитувати лише в адмінці! */
	add_to_sitemap: Scalars['Boolean']['output'];
	created_at: Scalars['String']['output'];
	/** Связь тега с доменом (DomainTag). Возвращает null если связи нет. */
	domainTags: Array<Maybe<DomainTagType>>;
	id: Scalars['ID']['output'];
	/** Является ли сущность предпочитаемой для персональной ленты новостей. */
	is_preferred: Scalars['Boolean']['output'];
	/** Slug тега (war, fun, fun). */
	slug: Scalars['String']['output'];
	/** Общее количество просмотров тега. */
	total_views: Scalars['Int']['output'];
	/** Перевод тега. */
	translate: TagTranslatesType;
	/** Переводы тега. */
	translates: Array<TagTranslatesType>;
	/** Количество уникальных просмотров тега. */
	unique_views: Scalars['Int']['output'];
	updated_at: Scalars['String']['output'];
};

export type TagTypeAdd_To_SitemapArgs = {
	domain_id?: InputMaybe<Scalars['ID']['input']>;
};

export type TagTypeTotal_ViewsArgs = {
	domain_id?: InputMaybe<Scalars['ID']['input']>;
};

export type TagTypeUnique_ViewsArgs = {
	domain_id?: InputMaybe<Scalars['ID']['input']>;
};

export type TagTypePagination = {
	__typename?: 'TagTypePagination';
	/** List of items on the current page */
	data?: Maybe<Array<Maybe<TagType>>>;
	/** Pagination meta data */
	meta?: Maybe<PaginationMeta>;
};

export type TranslateType = {
	__typename?: 'TranslateType';
	key: Scalars['String']['output'];
	lang: Scalars['String']['output'];
	place: Scalars['String']['output'];
	text?: Maybe<Scalars['String']['output']>;
};

export type UserArticlesPersonalSettings = {
	__typename?: 'UserArticlesPersonalSettings';
	/** Модель для настройки. */
	model: Scalars['String']['output'];
	/** ID модели для настройки. */
	model_id: Scalars['Int']['output'];
	/** Правило (include/exclude) по умолчанию include. */
	rule: Scalars['String']['output'];
};

/** Список возможных значений моделей для персональных новостей. */
export enum UserArticlesPersonalSettingsModelEnum {
	Admin = 'admin',
	Category = 'category',
	Tag = 'tag',
}

/** Список возможных правил персонализированных настроек новостей. */
export enum UserArticlesPersonalSettingsRuleEnum {
	Exclude = 'exclude',
	Include = 'include',
}

export type UserLoginType = {
	__typename?: 'UserLoginType';
	access_token: Scalars['String']['output'];
	expires_in: Scalars['Int']['output'];
	refresh_expires_in: Scalars['Int']['output'];
	refresh_token: Scalars['String']['output'];
	token_type: Scalars['String']['output'];
	user?: Maybe<UserProfileType>;
};

/** Список всех возможных разрешений для типа: graph_user */
export enum UserPermissionEnum {
	FcmAdd = 'fcm_add',
	RoleList = 'role_list',
}

export type UserPersonalSettingsInput = {
	/** Модель для настройки. */
	model?: InputMaybe<UserArticlesPersonalSettingsModelEnum>;
	/** ID модели для настройки. */
	model_id: Scalars['Int']['input'];
	/** Правило фильтрации, по умолчанию include. */
	rule?: InputMaybe<UserArticlesPersonalSettingsRuleEnum>;
};

export type UserProfileType = {
	__typename?: 'UserProfileType';
	articles_personal_settings?: Maybe<Array<UserArticlesPersonalSettings>>;
	/** Может ли пользователь сменить пароль */
	can_change_password: Scalars['Boolean']['output'];
	/** Главное фото. */
	cover?: Maybe<File>;
	device_id?: Maybe<Scalars['String']['output']>;
	email: Scalars['String']['output'];
	email_verified_at?: Maybe<Scalars['String']['output']>;
	first_name?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	/** Зарегистрирован ли пользователь через facebook. */
	is_registered_by_facebook: Scalars['Boolean']['output'];
	/** Зарегистрирован ли пользователь через соц. сеть. */
	is_registered_by_social: Scalars['Boolean']['output'];
	/** Подписан ли пользователь для текущего домена на рассылку. */
	is_subscribed_for_subscription_in_current_domain: Scalars['Boolean']['output'];
	lang?: Maybe<Scalars['String']['output']>;
	language?: Maybe<LanguageType>;
	last_name?: Maybe<Scalars['String']['output']>;
	liked_articles?: Maybe<ArticleTypePagination>;
	middle_name?: Maybe<Scalars['String']['output']>;
	permissions?: Maybe<Array<Maybe<PermissionType>>>;
	phone?: Maybe<Scalars['String']['output']>;
	stored_articles?: Maybe<ArticleTypePagination>;
	telegram?: Maybe<Scalars['String']['output']>;
};

export type UserProfileTypeLiked_ArticlesArgs = {
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
};

export type UserProfileTypeStored_ArticlesArgs = {
	page?: InputMaybe<Scalars['Int']['input']>;
	per_page?: InputMaybe<Scalars['Int']['input']>;
};

export type UserType = {
	__typename?: 'UserType';
	created_at: Scalars['String']['output'];
	email: Scalars['String']['output'];
	first_name?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	lang?: Maybe<Scalars['String']['output']>;
	last_name?: Maybe<Scalars['String']['output']>;
	middle_name?: Maybe<Scalars['String']['output']>;
	/** Список возможных разрешений для текущей модели. */
	permission?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
	roles?: Maybe<Array<Maybe<RoleType>>>;
	telegram?: Maybe<Scalars['String']['output']>;
	updated_at: Scalars['String']['output'];
};

export type UserTypeMessage = {
	__typename?: 'UserTypeMessage';
	data?: Maybe<UserType>;
	message?: Maybe<Scalars['String']['output']>;
	/** Возможные варианты: success, error, warning */
	type?: Maybe<MessageTypeEnum>;
};

export type UserUpdateInput = {
	/** Имя пользователя */
	first_name?: InputMaybe<Scalars['String']['input']>;
	/** Фамилия пользователя */
	last_name?: InputMaybe<Scalars['String']['input']>;
	/** Пароль пользователя */
	password?: InputMaybe<Scalars['String']['input']>;
	/** Повтор пароля пользователя */
	password_confirmation?: InputMaybe<Scalars['String']['input']>;
	/** Номер телефона пользователя */
	phone?: InputMaybe<Scalars['String']['input']>;
	/** Telegram пользователя */
	telegram?: InputMaybe<Scalars['String']['input']>;
};

export type VideoLink = {
	__typename?: 'VideoLink';
	/** Главное фото. */
	cover?: Maybe<File>;
	created_at: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	/** Ссылка. */
	link: Scalars['String']['output'];
	/** Ссылка для мобильного приложения. */
	link_mobile: Scalars['String']['output'];
	/** Перевод для видео. */
	translate: VideoLinkTranslates;
	/** Переводы для видео. */
	translates: Array<VideoLinkTranslates>;
	updated_at: Scalars['String']['output'];
};

export type VideoLinkAttachImagesInput = {
	id: Scalars['ID']['input'];
	images: Array<FileInput>;
	images_type: VideoLinkMediaCollectionEnum;
};

export type VideoLinkDetachImagesInput = {
	id: Scalars['ID']['input'];
	images: Array<InputMaybe<Scalars['ID']['input']>>;
	images_type: VideoLinkMediaCollectionEnum;
};

export type VideoLinkInput = {
	/** ID (нужно во время редактирования). */
	id?: InputMaybe<Scalars['ID']['input']>;
	/** Ссылка. */
	link: Scalars['String']['input'];
	/** Ссылка для мобильного приложения. */
	link_mobile?: InputMaybe<Scalars['String']['input']>;
	/** Переводы для видео. */
	translates: Array<VideoLinkTranslatesInput>;
};

/** Список возможных типов изображений. */
export enum VideoLinkMediaCollectionEnum {
	Cover = 'cover',
}

export type VideoLinkTranslates = {
	__typename?: 'VideoLinkTranslates';
	/** Подпись. */
	caption?: Maybe<Scalars['String']['output']>;
	created_at: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	/** Язык перевода. */
	language: Scalars['String']['output'];
	updated_at: Scalars['String']['output'];
};

export type VideoLinkTranslatesInput = {
	/** Подпись видео. */
	caption?: InputMaybe<Scalars['String']['input']>;
	/** Язык перевода. */
	language: Scalars['String']['input'];
};

export type AdminLoginUnion = AdminLoginType | TwoFactoryConfirmation;

export type TwoFactoryConfirmation = {
	__typename?: 'twoFactoryConfirmation';
	message: Scalars['String']['output'];
	twoFa: Scalars['Boolean']['output'];
};

export type NewsPageFragment = {
	__typename?: 'ArticleType';
	id: string;
	slug: string;
	is_stored: boolean;
	is_liked: boolean;
	published_at?: string | null;
	updated_at: string;
	total_views: number;
	unique_views: number;
	can_listen: boolean;
	expected_reading_time?: number | null;
	stored_count: number;
	liked_count: number;
	special_tag?: { __typename?: 'SpecialTagType'; id: string } | null;
	owner: {
		__typename?: 'AdminType';
		id: string;
		name: string;
		has_owned_page: boolean;
		cover?: { __typename?: 'File'; url?: string | null } | null;
		roles?: Array<{
			__typename?: 'RoleType';
			name: string;
			translate: { __typename?: 'RoleTranslateType'; title: string };
		} | null> | null;
		translate: { __typename?: 'AdminTranslatesType'; slug?: string | null; position?: string | null };
	};
	authors?: Array<{
		__typename?: 'AdminType';
		id: string;
		name: string;
		has_owned_page: boolean;
		cover?: { __typename?: 'File'; url?: string | null } | null;
		roles?: Array<{
			__typename?: 'RoleType';
			name: string;
			translate: { __typename?: 'RoleTranslateType'; title: string };
		} | null> | null;
		translate: { __typename?: 'AdminTranslatesType'; slug?: string | null; position?: string | null };
	}> | null;
	categories: Array<{
		__typename?: 'CategoryType';
		color: string;
		slug: string;
		translate: { __typename?: 'CategoryTranslatesType'; title: string };
	}>;
	tags?: Array<{
		__typename?: 'TagType';
		slug: string;
		translate: { __typename?: 'TagTranslatesType'; title: string };
	}> | null;
	translate: {
		__typename?: 'ArticleTranslatesType';
		title: string;
		lead_paragraph?: string | null;
		content: string;
		key_points?: string | null;
		seo_keywords?: string | null;
	};
	cover?: {
		__typename?: 'File';
		alt?: string | null;
		url?: string | null;
		caption?: string | null;
		original_url?: string | null;
		mime_type?: string | null;
		responsive_images_as_array: Array<{ __typename?: 'ResponsiveImageSize'; url?: string | null; width: number }>;
	} | null;
	carousel_images?: Array<{
		__typename?: 'File';
		url?: string | null;
		alt?: string | null;
		responsive_images_as_array: Array<{ __typename?: 'ResponsiveImageSize'; url?: string | null; width: number }>;
	} | null> | null;
	video_links?: Array<{
		__typename?: 'VideoLink';
		id: string;
		link: string;
		translate: { __typename?: 'VideoLinkTranslates'; caption?: string | null };
		cover?: {
			__typename?: 'File';
			alt?: string | null;
			url?: string | null;
			responsive_images_as_array: Array<{
				__typename?: 'ResponsiveImageSize';
				url?: string | null;
				width: number;
			}>;
		} | null;
	}> | null;
	similar_articles?: Array<{
		__typename?: 'ArticleType';
		id: string;
		slug: string;
		is_stored: boolean;
		is_liked: boolean;
		published_at?: string | null;
		updated_at: string;
		total_views: number;
		unique_views: number;
		stored_count: number;
		liked_count: number;
		can_listen: boolean;
		expected_reading_time?: number | null;
		special_tag?: { __typename?: 'SpecialTagType'; id: string } | null;
		translate: {
			__typename?: 'ArticleTranslatesType';
			title: string;
			lead_paragraph?: string | null;
			content: string;
			key_points?: string | null;
		};
		owner: {
			__typename?: 'AdminType';
			id: string;
			name: string;
			has_owned_page: boolean;
			cover?: { __typename?: 'File'; url?: string | null } | null;
			roles?: Array<{
				__typename?: 'RoleType';
				name: string;
				translate: { __typename?: 'RoleTranslateType'; title: string };
			} | null> | null;
			translate: { __typename?: 'AdminTranslatesType'; slug?: string | null; position?: string | null };
		};
		authors?: Array<{
			__typename?: 'AdminType';
			id: string;
			name: string;
			has_owned_page: boolean;
			cover?: { __typename?: 'File'; url?: string | null } | null;
			roles?: Array<{
				__typename?: 'RoleType';
				name: string;
				translate: { __typename?: 'RoleTranslateType'; title: string };
			} | null> | null;
			translate: { __typename?: 'AdminTranslatesType'; slug?: string | null; position?: string | null };
		}> | null;
		categories: Array<{
			__typename?: 'CategoryType';
			color: string;
			slug: string;
			translate: { __typename?: 'CategoryTranslatesType'; title: string };
		}>;
		tags?: Array<{
			__typename?: 'TagType';
			slug: string;
			translate: { __typename?: 'TagTranslatesType'; title: string };
		}> | null;
		cover?: {
			__typename?: 'File';
			alt?: string | null;
			url?: string | null;
			caption?: string | null;
			responsive_images_as_array: Array<{
				__typename?: 'ResponsiveImageSize';
				url?: string | null;
				width: number;
			}>;
		} | null;
		carousel_images?: Array<{
			__typename?: 'File';
			url?: string | null;
			alt?: string | null;
			responsive_images_as_array: Array<{
				__typename?: 'ResponsiveImageSize';
				url?: string | null;
				width: number;
			}>;
		} | null> | null;
		video_links?: Array<{
			__typename?: 'VideoLink';
			id: string;
			link: string;
			translate: { __typename?: 'VideoLinkTranslates'; caption?: string | null };
			cover?: {
				__typename?: 'File';
				alt?: string | null;
				url?: string | null;
				responsive_images_as_array: Array<{
					__typename?: 'ResponsiveImageSize';
					url?: string | null;
					width: number;
				}>;
			} | null;
		}> | null;
		seo: {
			__typename?: 'SeoType';
			seo_title?: string | null;
			seo_h1?: string | null;
			seo_description?: string | null;
		};
	}> | null;
	seo: { __typename?: 'SeoType'; seo_title?: string | null; seo_h1?: string | null; seo_description?: string | null };
};

export type SimilarArticlesFragmentFragment = {
	__typename?: 'ArticleType';
	id: string;
	slug: string;
	is_stored: boolean;
	is_liked: boolean;
	published_at?: string | null;
	updated_at: string;
	total_views: number;
	unique_views: number;
	stored_count: number;
	liked_count: number;
	can_listen: boolean;
	expected_reading_time?: number | null;
	special_tag?: { __typename?: 'SpecialTagType'; id: string } | null;
	translate: {
		__typename?: 'ArticleTranslatesType';
		title: string;
		lead_paragraph?: string | null;
		content: string;
		key_points?: string | null;
	};
	owner: {
		__typename?: 'AdminType';
		id: string;
		name: string;
		has_owned_page: boolean;
		cover?: { __typename?: 'File'; url?: string | null } | null;
		roles?: Array<{
			__typename?: 'RoleType';
			name: string;
			translate: { __typename?: 'RoleTranslateType'; title: string };
		} | null> | null;
		translate: { __typename?: 'AdminTranslatesType'; slug?: string | null; position?: string | null };
	};
	authors?: Array<{
		__typename?: 'AdminType';
		id: string;
		name: string;
		has_owned_page: boolean;
		cover?: { __typename?: 'File'; url?: string | null } | null;
		roles?: Array<{
			__typename?: 'RoleType';
			name: string;
			translate: { __typename?: 'RoleTranslateType'; title: string };
		} | null> | null;
		translate: { __typename?: 'AdminTranslatesType'; slug?: string | null; position?: string | null };
	}> | null;
	categories: Array<{
		__typename?: 'CategoryType';
		color: string;
		slug: string;
		translate: { __typename?: 'CategoryTranslatesType'; title: string };
	}>;
	tags?: Array<{
		__typename?: 'TagType';
		slug: string;
		translate: { __typename?: 'TagTranslatesType'; title: string };
	}> | null;
	cover?: {
		__typename?: 'File';
		alt?: string | null;
		url?: string | null;
		caption?: string | null;
		responsive_images_as_array: Array<{ __typename?: 'ResponsiveImageSize'; url?: string | null; width: number }>;
	} | null;
	carousel_images?: Array<{
		__typename?: 'File';
		url?: string | null;
		alt?: string | null;
		responsive_images_as_array: Array<{ __typename?: 'ResponsiveImageSize'; url?: string | null; width: number }>;
	} | null> | null;
	video_links?: Array<{
		__typename?: 'VideoLink';
		id: string;
		link: string;
		translate: { __typename?: 'VideoLinkTranslates'; caption?: string | null };
		cover?: {
			__typename?: 'File';
			alt?: string | null;
			url?: string | null;
			responsive_images_as_array: Array<{
				__typename?: 'ResponsiveImageSize';
				url?: string | null;
				width: number;
			}>;
		} | null;
	}> | null;
	seo: { __typename?: 'SeoType'; seo_title?: string | null; seo_h1?: string | null; seo_description?: string | null };
};

export type ArticleQueryVariables = Exact<{
	slug: Scalars['String']['input'];
}>;

export type ArticleQuery = {
	__typename?: 'Query';
	ArticlePageData?: {
		__typename?: 'ArticleTypePagination';
		data?: Array<{
			__typename?: 'ArticleType';
			id: string;
			slug: string;
			is_stored: boolean;
			is_liked: boolean;
			published_at?: string | null;
			updated_at: string;
			total_views: number;
			unique_views: number;
			can_listen: boolean;
			expected_reading_time?: number | null;
			stored_count: number;
			liked_count: number;
			special_tag?: { __typename?: 'SpecialTagType'; id: string } | null;
			owner: {
				__typename?: 'AdminType';
				id: string;
				name: string;
				has_owned_page: boolean;
				cover?: { __typename?: 'File'; url?: string | null } | null;
				roles?: Array<{
					__typename?: 'RoleType';
					name: string;
					translate: { __typename?: 'RoleTranslateType'; title: string };
				} | null> | null;
				translate: { __typename?: 'AdminTranslatesType'; slug?: string | null; position?: string | null };
			};
			authors?: Array<{
				__typename?: 'AdminType';
				id: string;
				name: string;
				has_owned_page: boolean;
				cover?: { __typename?: 'File'; url?: string | null } | null;
				roles?: Array<{
					__typename?: 'RoleType';
					name: string;
					translate: { __typename?: 'RoleTranslateType'; title: string };
				} | null> | null;
				translate: { __typename?: 'AdminTranslatesType'; slug?: string | null; position?: string | null };
			}> | null;
			categories: Array<{
				__typename?: 'CategoryType';
				color: string;
				slug: string;
				translate: { __typename?: 'CategoryTranslatesType'; title: string };
			}>;
			tags?: Array<{
				__typename?: 'TagType';
				slug: string;
				translate: { __typename?: 'TagTranslatesType'; title: string };
			}> | null;
			translate: {
				__typename?: 'ArticleTranslatesType';
				title: string;
				lead_paragraph?: string | null;
				content: string;
				key_points?: string | null;
				seo_keywords?: string | null;
			};
			cover?: {
				__typename?: 'File';
				alt?: string | null;
				url?: string | null;
				caption?: string | null;
				original_url?: string | null;
				mime_type?: string | null;
				responsive_images_as_array: Array<{
					__typename?: 'ResponsiveImageSize';
					url?: string | null;
					width: number;
				}>;
			} | null;
			carousel_images?: Array<{
				__typename?: 'File';
				url?: string | null;
				alt?: string | null;
				responsive_images_as_array: Array<{
					__typename?: 'ResponsiveImageSize';
					url?: string | null;
					width: number;
				}>;
			} | null> | null;
			video_links?: Array<{
				__typename?: 'VideoLink';
				id: string;
				link: string;
				translate: { __typename?: 'VideoLinkTranslates'; caption?: string | null };
				cover?: {
					__typename?: 'File';
					alt?: string | null;
					url?: string | null;
					responsive_images_as_array: Array<{
						__typename?: 'ResponsiveImageSize';
						url?: string | null;
						width: number;
					}>;
				} | null;
			}> | null;
			similar_articles?: Array<{
				__typename?: 'ArticleType';
				id: string;
				slug: string;
				is_stored: boolean;
				is_liked: boolean;
				published_at?: string | null;
				updated_at: string;
				total_views: number;
				unique_views: number;
				stored_count: number;
				liked_count: number;
				can_listen: boolean;
				expected_reading_time?: number | null;
				special_tag?: { __typename?: 'SpecialTagType'; id: string } | null;
				translate: {
					__typename?: 'ArticleTranslatesType';
					title: string;
					lead_paragraph?: string | null;
					content: string;
					key_points?: string | null;
				};
				owner: {
					__typename?: 'AdminType';
					id: string;
					name: string;
					has_owned_page: boolean;
					cover?: { __typename?: 'File'; url?: string | null } | null;
					roles?: Array<{
						__typename?: 'RoleType';
						name: string;
						translate: { __typename?: 'RoleTranslateType'; title: string };
					} | null> | null;
					translate: { __typename?: 'AdminTranslatesType'; slug?: string | null; position?: string | null };
				};
				authors?: Array<{
					__typename?: 'AdminType';
					id: string;
					name: string;
					has_owned_page: boolean;
					cover?: { __typename?: 'File'; url?: string | null } | null;
					roles?: Array<{
						__typename?: 'RoleType';
						name: string;
						translate: { __typename?: 'RoleTranslateType'; title: string };
					} | null> | null;
					translate: { __typename?: 'AdminTranslatesType'; slug?: string | null; position?: string | null };
				}> | null;
				categories: Array<{
					__typename?: 'CategoryType';
					color: string;
					slug: string;
					translate: { __typename?: 'CategoryTranslatesType'; title: string };
				}>;
				tags?: Array<{
					__typename?: 'TagType';
					slug: string;
					translate: { __typename?: 'TagTranslatesType'; title: string };
				}> | null;
				cover?: {
					__typename?: 'File';
					alt?: string | null;
					url?: string | null;
					caption?: string | null;
					responsive_images_as_array: Array<{
						__typename?: 'ResponsiveImageSize';
						url?: string | null;
						width: number;
					}>;
				} | null;
				carousel_images?: Array<{
					__typename?: 'File';
					url?: string | null;
					alt?: string | null;
					responsive_images_as_array: Array<{
						__typename?: 'ResponsiveImageSize';
						url?: string | null;
						width: number;
					}>;
				} | null> | null;
				video_links?: Array<{
					__typename?: 'VideoLink';
					id: string;
					link: string;
					translate: { __typename?: 'VideoLinkTranslates'; caption?: string | null };
					cover?: {
						__typename?: 'File';
						alt?: string | null;
						url?: string | null;
						responsive_images_as_array: Array<{
							__typename?: 'ResponsiveImageSize';
							url?: string | null;
							width: number;
						}>;
					} | null;
				}> | null;
				seo: {
					__typename?: 'SeoType';
					seo_title?: string | null;
					seo_h1?: string | null;
					seo_description?: string | null;
				};
			}> | null;
			seo: {
				__typename?: 'SeoType';
				seo_title?: string | null;
				seo_h1?: string | null;
				seo_description?: string | null;
			};
		} | null> | null;
	} | null;
};

export type CategoryArticleFragment = {
	__typename?: 'ArticleType';
	id: string;
	slug: string;
	translate: { __typename?: 'ArticleTranslatesType'; title: string };
	cover?: {
		__typename?: 'File';
		responsive_images_as_array: Array<{ __typename?: 'ResponsiveImageSize'; url?: string | null; width: number }>;
	} | null;
};

export type CategoryFragment = {
	__typename?: 'CategoryType';
	id: string;
	slug: string;
	translate: { __typename?: 'CategoryTranslatesType'; title: string };
	articles?: {
		__typename?: 'ArticleTypePagination';
		data?: Array<{
			__typename?: 'ArticleType';
			id: string;
			slug: string;
			translate: { __typename?: 'ArticleTranslatesType'; title: string };
			cover?: {
				__typename?: 'File';
				responsive_images_as_array: Array<{
					__typename?: 'ResponsiveImageSize';
					url?: string | null;
					width: number;
				}>;
			} | null;
		} | null> | null;
	} | null;
};

export type CategoryQueryVariables = Exact<{
	slug: Scalars['String']['input'];
}>;

export type CategoryQuery = {
	__typename?: 'Query';
	Categories?: {
		__typename?: 'CategoryTypePagination';
		data?: Array<{
			__typename?: 'CategoryType';
			id: string;
			slug: string;
			translate: { __typename?: 'CategoryTranslatesType'; title: string };
			articles?: {
				__typename?: 'ArticleTypePagination';
				data?: Array<{
					__typename?: 'ArticleType';
					id: string;
					slug: string;
					translate: { __typename?: 'ArticleTranslatesType'; title: string };
					cover?: {
						__typename?: 'File';
						responsive_images_as_array: Array<{
							__typename?: 'ResponsiveImageSize';
							url?: string | null;
							width: number;
						}>;
					} | null;
				} | null> | null;
			} | null;
		} | null> | null;
	} | null;
};

export type PagesListFragment = {
	__typename?: 'Page';
	slug: string;
	translate: { __typename?: 'PageTranslatesType'; title: string };
};

export type CurrentDomainSocialsFragment = {
	__typename?: 'DomainSocialLinkType';
	url: string;
	social: { __typename?: 'SocialLinkType'; title: string; icon?: string | null };
};

export type CurrentDomainFragment = {
	__typename?: 'PublicDomainType';
	url: string;
	id: string;
	name: string;
	logo?: { __typename?: 'File'; url?: string | null; original_url?: string | null } | null;
	black_logo?: { __typename?: 'File'; url?: string | null; original_url?: string | null } | null;
	footer_logo?: { __typename?: 'File'; url?: string | null; original_url?: string | null } | null;
};

export type CurrentDomainSettingFragment = {
	__typename?: 'DomainSettingType';
	id: string;
	weather?: string | null;
	currency?: string | null;
	contacts_email?: string | null;
	contacts_phone?: string | null;
	advert_phone?: string | null;
	translate: {
		__typename?: 'DomainSettingTranslatesType';
		contacts_title?: string | null;
		advert_title?: string | null;
		seo_h1?: string | null;
		seo_description?: string | null;
		seo_title?: string | null;
		video_seo_h1?: string | null;
		video_seo_title?: string | null;
		video_seo_description?: string | null;
		articles_seo_h1?: string | null;
		articles_seo_title?: string | null;
		articles_seo_description?: string | null;
		address?: string | null;
		main_redactor?: string | null;
	};
	top_tag?: {
		__typename?: 'TagType';
		slug: string;
		translate: { __typename?: 'TagTranslatesType'; title: string };
	} | null;
	in_trend_tags?: Array<{
		__typename?: 'TagType';
		slug: string;
		translate: { __typename?: 'TagTranslatesType'; title: string };
	} | null> | null;
};

export type NavCategoryFragment = {
	__typename?: 'CategoryType';
	id: string;
	slug: string;
	color: string;
	domain: { __typename?: 'DomainType'; id: string };
	translate: { __typename?: 'CategoryTranslatesType'; title: string };
	parent?: { __typename?: 'CategoryType'; id: string; slug: string } | null;
	subCategories?: Array<{
		__typename?: 'CategoryType';
		slug: string;
		translate: { __typename?: 'CategoryTranslatesType'; title: string };
	} | null> | null;
};

export type NewsColumnFragment = {
	__typename?: 'ArticleCardType';
	id: string;
	slug: string;
	carousel_images_count: number;
	video_links_count: number;
	published_at?: string | null;
	special_tag?: { __typename?: 'SpecialTagType'; id: string } | null;
	cover?: {
		__typename?: 'File';
		id: string;
		url?: string | null;
		alt?: string | null;
		responsive_images_as_array: Array<{ __typename?: 'ResponsiveImageSize'; url?: string | null; width: number }>;
	} | null;
	translate: { __typename?: 'ArticleCardTranslatesType'; title: string };
	categories?: Array<{
		__typename?: 'CategoryLabelType';
		id: string;
		slug: string;
		color: string;
		translate: { __typename?: 'CategoryLabelTranslatesType'; title: string };
	}> | null;
};

export type HomePageFragment = {
	__typename?: 'HomePageCategoryBlockType';
	categories?: Array<{
		__typename?: 'CategoryBlockItemType';
		slug: string;
		id: string;
		color: string;
		translate: { __typename?: 'CategoryBlockItemTranslatesType'; title: string; language: string };
		popular_tags?: Array<{
			__typename?: 'TagLabelType';
			id: string;
			slug: string;
			translate: { __typename?: 'TagLabelTranslatesType'; title: string; language: string };
		}> | null;
	}> | null;
	articles?: Array<{
		__typename?: 'ArticleCardType';
		slug: string;
		id: string;
		is_stored: boolean;
		video_links_count: number;
		carousel_images_count: number;
		created_at: string;
		published_at?: string | null;
		translate: { __typename?: 'ArticleCardTranslatesType'; language: string; title: string };
		special_tag?: { __typename?: 'SpecialTagType'; id: string } | null;
		categories?: Array<{
			__typename?: 'CategoryLabelType';
			id: string;
			slug: string;
			color: string;
			translate: { __typename?: 'CategoryLabelTranslatesType'; title: string };
		}> | null;
		cover?: {
			__typename?: 'File';
			id: string;
			url?: string | null;
			alt?: string | null;
			responsive_images_as_array: Array<{
				__typename?: 'ResponsiveImageSize';
				url?: string | null;
				width: number;
			}>;
		} | null;
		video_links?: Array<{
			__typename?: 'VideoLink';
			id: string;
			link: string;
			cover?: {
				__typename?: 'File';
				responsive_images_as_array: Array<{
					__typename?: 'ResponsiveImageSize';
					url?: string | null;
					width: number;
				}>;
			} | null;
		}> | null;
	}> | null;
};

export type GetCommonDataQueryVariables = Exact<{
	side: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
	language: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;

export type GetCommonDataQuery = {
	__typename?: 'Query';
	TranslatesSimple?: Array<{
		__typename?: 'TranslateType';
		key: string;
		text?: string | null;
		lang: string;
	} | null> | null;
	Categories?: {
		__typename?: 'CategoryTypePagination';
		data?: Array<{
			__typename?: 'CategoryType';
			id: string;
			slug: string;
			color: string;
			domain: { __typename?: 'DomainType'; id: string };
			translate: { __typename?: 'CategoryTranslatesType'; title: string };
			parent?: { __typename?: 'CategoryType'; id: string; slug: string } | null;
			subCategories?: Array<{
				__typename?: 'CategoryType';
				slug: string;
				translate: { __typename?: 'CategoryTranslatesType'; title: string };
			} | null> | null;
		} | null> | null;
	} | null;
	PagesList?: {
		__typename?: 'PagePagination';
		data?: Array<{
			__typename?: 'Page';
			slug: string;
			translate: { __typename?: 'PageTranslatesType'; title: string };
		} | null> | null;
	} | null;
	CurrentDomain?: {
		__typename?: 'PublicDomainTypePagination';
		data?: Array<{
			__typename?: 'PublicDomainType';
			url: string;
			id: string;
			name: string;
			setting?: {
				__typename?: 'DomainSettingType';
				id: string;
				weather?: string | null;
				currency?: string | null;
				contacts_email?: string | null;
				contacts_phone?: string | null;
				advert_phone?: string | null;
				translate: {
					__typename?: 'DomainSettingTranslatesType';
					contacts_title?: string | null;
					advert_title?: string | null;
					seo_h1?: string | null;
					seo_description?: string | null;
					seo_title?: string | null;
					video_seo_h1?: string | null;
					video_seo_title?: string | null;
					video_seo_description?: string | null;
					articles_seo_h1?: string | null;
					articles_seo_title?: string | null;
					articles_seo_description?: string | null;
					address?: string | null;
					main_redactor?: string | null;
				};
				top_tag?: {
					__typename?: 'TagType';
					slug: string;
					translate: { __typename?: 'TagTranslatesType'; title: string };
				} | null;
				in_trend_tags?: Array<{
					__typename?: 'TagType';
					slug: string;
					translate: { __typename?: 'TagTranslatesType'; title: string };
				} | null> | null;
			} | null;
			domain_social_links?: Array<{
				__typename?: 'DomainSocialLinkType';
				url: string;
				social: { __typename?: 'SocialLinkType'; title: string; icon?: string | null };
			}> | null;
			logo?: { __typename?: 'File'; url?: string | null; original_url?: string | null } | null;
			black_logo?: { __typename?: 'File'; url?: string | null; original_url?: string | null } | null;
			footer_logo?: { __typename?: 'File'; url?: string | null; original_url?: string | null } | null;
		} | null> | null;
	} | null;
	HomePageBlock: {
		__typename?: 'HomePageCategoryBlockType';
		categories?: Array<{
			__typename?: 'CategoryBlockItemType';
			slug: string;
			id: string;
			color: string;
			translate: { __typename?: 'CategoryBlockItemTranslatesType'; title: string; language: string };
			popular_tags?: Array<{
				__typename?: 'TagLabelType';
				id: string;
				slug: string;
				translate: { __typename?: 'TagLabelTranslatesType'; title: string; language: string };
			}> | null;
		}> | null;
		articles?: Array<{
			__typename?: 'ArticleCardType';
			slug: string;
			id: string;
			is_stored: boolean;
			video_links_count: number;
			carousel_images_count: number;
			created_at: string;
			published_at?: string | null;
			translate: { __typename?: 'ArticleCardTranslatesType'; language: string; title: string };
			special_tag?: { __typename?: 'SpecialTagType'; id: string } | null;
			categories?: Array<{
				__typename?: 'CategoryLabelType';
				id: string;
				slug: string;
				color: string;
				translate: { __typename?: 'CategoryLabelTranslatesType'; title: string };
			}> | null;
			cover?: {
				__typename?: 'File';
				id: string;
				url?: string | null;
				alt?: string | null;
				responsive_images_as_array: Array<{
					__typename?: 'ResponsiveImageSize';
					url?: string | null;
					width: number;
				}>;
			} | null;
			video_links?: Array<{
				__typename?: 'VideoLink';
				id: string;
				link: string;
				cover?: {
					__typename?: 'File';
					responsive_images_as_array: Array<{
						__typename?: 'ResponsiveImageSize';
						url?: string | null;
						width: number;
					}>;
				} | null;
			}> | null;
		}> | null;
	};
	NewsColumn?: Array<{
		__typename?: 'ArticleCardType';
		id: string;
		slug: string;
		carousel_images_count: number;
		video_links_count: number;
		published_at?: string | null;
		special_tag?: { __typename?: 'SpecialTagType'; id: string } | null;
		cover?: {
			__typename?: 'File';
			id: string;
			url?: string | null;
			alt?: string | null;
			responsive_images_as_array: Array<{
				__typename?: 'ResponsiveImageSize';
				url?: string | null;
				width: number;
			}>;
		} | null;
		translate: { __typename?: 'ArticleCardTranslatesType'; title: string };
		categories?: Array<{
			__typename?: 'CategoryLabelType';
			id: string;
			slug: string;
			color: string;
			translate: { __typename?: 'CategoryLabelTranslatesType'; title: string };
		}> | null;
	}> | null;
};

export type ArticleFragment = {
	__typename?: 'ArticleType';
	id: string;
	slug: string;
	published_at?: string | null;
	special_tag?: { __typename?: 'SpecialTagType'; id: string } | null;
	cover?: {
		__typename?: 'File';
		id: string;
		url?: string | null;
		alt?: string | null;
		responsive_images_as_array: Array<{ __typename?: 'ResponsiveImageSize'; url?: string | null; width: number }>;
	} | null;
	translate: { __typename?: 'ArticleTranslatesType'; title: string };
	categories: Array<{
		__typename?: 'CategoryType';
		id: string;
		slug: string;
		color: string;
		translate: { __typename?: 'CategoryTranslatesType'; title: string };
	}>;
};

export type GetHomePageDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomePageDataQuery = {
	__typename?: 'Query';
	Categories?: {
		__typename?: 'CategoryTypePagination';
		data?: Array<{
			__typename?: 'CategoryType';
			id: string;
			slug: string;
			translate: { __typename?: 'CategoryTranslatesType'; title: string };
			articles?: {
				__typename?: 'ArticleTypePagination';
				data?: Array<{
					__typename?: 'ArticleType';
					id: string;
					slug: string;
					published_at?: string | null;
					special_tag?: { __typename?: 'SpecialTagType'; id: string } | null;
					cover?: {
						__typename?: 'File';
						id: string;
						url?: string | null;
						alt?: string | null;
						responsive_images_as_array: Array<{
							__typename?: 'ResponsiveImageSize';
							url?: string | null;
							width: number;
						}>;
					} | null;
					translate: { __typename?: 'ArticleTranslatesType'; title: string };
					categories: Array<{
						__typename?: 'CategoryType';
						id: string;
						slug: string;
						color: string;
						translate: { __typename?: 'CategoryTranslatesType'; title: string };
					}>;
				} | null> | null;
			} | null;
		} | null> | null;
	} | null;
};

export type SearchQueryVariables = Exact<{
	query: Scalars['String']['input'];
}>;

export type SearchQuery = {
	__typename?: 'Query';
	items?: {
		__typename?: 'ArticleTypePagination';
		data?: Array<{
			__typename?: 'ArticleType';
			id: string;
			slug: string;
			translate: { __typename?: 'ArticleTranslatesType'; title: string };
		} | null> | null;
	} | null;
};

export type TopArticleFragment = {
	__typename?: 'ArticleType';
	id: string;
	slug: string;
	published_at?: string | null;
	special_tag?: { __typename?: 'SpecialTagType'; id: string } | null;
	cover?: {
		__typename?: 'File';
		id: string;
		url?: string | null;
		alt?: string | null;
		responsive_images_as_array: Array<{ __typename?: 'ResponsiveImageSize'; url?: string | null; width: number }>;
	} | null;
	translate: { __typename?: 'ArticleTranslatesType'; title: string };
	categories: Array<{
		__typename?: 'CategoryType';
		id: string;
		slug: string;
		color: string;
		translate: { __typename?: 'CategoryTranslatesType'; title: string };
	}>;
};

export type GetTopArticlesDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetTopArticlesDataQuery = {
	__typename?: 'Query';
	TopArticlesToday?: {
		__typename?: 'ArticleTypePagination';
		data?: Array<{
			__typename?: 'ArticleType';
			id: string;
			slug: string;
			published_at?: string | null;
			special_tag?: { __typename?: 'SpecialTagType'; id: string } | null;
			cover?: {
				__typename?: 'File';
				id: string;
				url?: string | null;
				alt?: string | null;
				responsive_images_as_array: Array<{
					__typename?: 'ResponsiveImageSize';
					url?: string | null;
					width: number;
				}>;
			} | null;
			translate: { __typename?: 'ArticleTranslatesType'; title: string };
			categories: Array<{
				__typename?: 'CategoryType';
				id: string;
				slug: string;
				color: string;
				translate: { __typename?: 'CategoryTranslatesType'; title: string };
			}>;
		} | null> | null;
	} | null;
};
